import { join } from "path";
import {
  AuxThemeId,
  AuxThemeRegId,
  AuxThemeRegIndex,
  OfflineResult,
  OnlineResult,
  Variant,
  type AuxThemeRegIndexWithId,
} from "../@types/index";
import { checkRepo, getContentFromRelease, getLatestVerTag } from "../api/index";
import { isAuxThemeRegIndex } from "../auxiliary/helpers";
import { showErrorNotification, showProgresscopeNAtification } from "../extension/notifications";
import { l10nT } from "../l10n/index";
import { getAuxThemeId, getAuxThemeRegIds } from "./helpers";
import {
  cacheFile,
  checkCacheForFile,
  checkIfFileCached,
  deleteCachedDir,
  getCachedFileContent,
} from "./utils";

export const prepAuxThemeRegs = async (auxThemeRegs: string[]): Promise<boolean> => {
  const auxThemeRegIds = getAuxThemeRegIds(auxThemeRegs);
  const areAuxThemeRegsAvail = await checkAuxThemeRegAvail(auxThemeRegIds);
  if (!areAuxThemeRegsAvail) {
    return false;
  }
  const uncachedAuxThemeRegIds: AuxThemeRegId[] = [];
  const obsoleteAuxThemeRegIds: AuxThemeRegId[] = [];
  for (const auxThemeRegId of auxThemeRegIds) {
    if (
      checkCacheForFile("auxiliary", join(auxThemeRegId.owner, auxThemeRegId.repo), "index.json")
    ) {
      const hasUpdates = await auxThemeRegHasUpdates(auxThemeRegId);
      if (!hasUpdates.success) {
        return false;
      }
      if (hasUpdates.data) {
        obsoleteAuxThemeRegIds.push(auxThemeRegId);
      }
    } else {
      uncachedAuxThemeRegIds.push(auxThemeRegId);
    }
  }
  if (uncachedAuxThemeRegIds.length > 0) {
    let success = true;
    await showProgresscopeNAtification(
      l10nT("notification.title.downloadingIndexes"),
      async (progress) => {
        const increment = 100 / uncachedAuxThemeRegIds.length;
        for (const auxThemeRegId of uncachedAuxThemeRegIds) {
          progress.report({
            message: `"${auxThemeRegId.owner}/${auxThemeRegId.repo}"`,
            increment: increment === 100 ? undefined : increment,
          });
          const auxThemeRegIndex = await getAuxThemeRegIndex(auxThemeRegId);
          if (!auxThemeRegIndex) {
            success = false;
            break;
          }
        }
      },
    );
    if (!success) {
      return false;
    }
  }
  if (obsoleteAuxThemeRegIds.length > 0) {
    let success = true;
    await showProgresscopeNAtification(
      l10nT("notification.title.updatingIndexes"),
      async (progress) => {
        const increment = 100 / obsoleteAuxThemeRegIds.length;
        for (const auxThemeRegId of obsoleteAuxThemeRegIds) {
          progress.report({
            message: `"${auxThemeRegId.owner}/${auxThemeRegId.repo}"`,
            increment: increment === 100 ? undefined : increment,
          });
          await deleteCachedDir("auxiliary", join(auxThemeRegId.owner, auxThemeRegId.repo)).catch(
            (error: NodeJS.ErrnoException) => {
              showErrorNotification(
                l10nT("notification.full.removeFailure$msg", [error.message]),
                null,
                null,
              );
              success = false;
            },
          );
          if (!success) {
            break;
          }
          const auxThemeRegIndex = await getAuxThemeRegIndex(auxThemeRegId);
          if (!auxThemeRegIndex) {
            success = false;
            break;
          }
        }
      },
    );
    if (!success) {
      return false;
    }
  }
  return true;
};

export const prepAuxThemeRegsOffline = (auxThemeRegs: string[]): boolean => {
  const auxThemeRegIds = getAuxThemeRegIds(auxThemeRegs);
  let success = true;
  for (const auxThemeRegId of auxThemeRegIds) {
    if (
      !checkCacheForFile("auxiliary", join(auxThemeRegId.owner, auxThemeRegId.repo), "index.json")
    ) {
      showErrorNotification(
        l10nT("notification.full.regNotAvailOffline$id", [
          `${auxThemeRegId.owner}/${auxThemeRegId.repo}`,
        ]),
        null,
        null,
      );
      success = false;
      break;
    } else {
      const indexContents = getCachedFileContent(
        "auxiliary",
        join(auxThemeRegId.owner, auxThemeRegId.repo),
        "index.json",
      );
      const data = JSON.parse(indexContents);
      if (!isAuxThemeRegIndex(data)) {
        showErrorNotification(
          l10nT("notification.full.invalidReg$id", [
            `${auxThemeRegId.owner}/${auxThemeRegId.repo}`,
          ]),
          null,
          null,
        );
        success = false;
        break;
      }
    }
  }
  return success;
};

export const getAuxThemeRegIndexesWithId = (auxThemeRegs: string[]): AuxThemeRegIndexWithId[] => {
  const auxThemeRegIds = getAuxThemeRegIds(auxThemeRegs);
  const auxThemeRegIndexesWithId: AuxThemeRegIndexWithId[] = [];
  for (const auxThemeRegId of auxThemeRegIds) {
    const indexContent = getCachedFileContent(
      "auxiliary",
      join(auxThemeRegId.owner, auxThemeRegId.repo),
      "index.json",
    );
    const auxThemeRegIndex = JSON.parse(indexContent) as AuxThemeRegIndex;
    auxThemeRegIndexesWithId.push({
      auxThemeRegId: auxThemeRegId,
      auxThemeRegIndex: auxThemeRegIndex,
    });
  }
  return auxThemeRegIndexesWithId;
};

export const prepAuxTheme = async (
  auxThemeRegs: string[],
  auxTheme: string,
  variant: Variant,
): Promise<boolean> => {
  const auxThemeRegIds = getAuxThemeRegIds(auxThemeRegs);
  const auxThemeId = getAuxThemeId(auxTheme);
  const isRegInRegs = auxThemeRegIds.some(
    (auxThemeRegId) =>
      auxThemeRegId.owner === auxThemeId.owner && auxThemeRegId.repo === auxThemeId.repo,
  );
  if (!isRegInRegs) {
    showErrorNotification(
      l10nT("notification.full.regNotInRegs$id", [`${auxThemeId.owner}/${auxThemeId.repo}`]),
      null,
      null,
    );
    return false;
  }
  const isInReg = checkAuxThemeInReg(auxThemeId, variant);
  if (!isInReg.success) {
    return false;
  }
  const isCached = checkIfFileCached(
    "auxiliary",
    join(auxThemeId.owner, auxThemeId.repo, auxThemeId.publisher, auxThemeId.extension),
    `${auxThemeId.theme}.json`,
  );
  if (isCached) {
    return true;
  }
  return await getAuxTheme(auxThemeId);
};

export const prepAuxThemeOffline = async (
  auxThemeRegs: string[],
  auxTheme: string,
  variant: Variant,
): Promise<boolean> => {
  const auxThemeRegIds = getAuxThemeRegIds(auxThemeRegs);
  const auxThemeId = getAuxThemeId(auxTheme);
  const isRegInRegs = auxThemeRegIds.some(
    (auxThemeRegId) =>
      auxThemeRegId.owner === auxThemeId.owner && auxThemeRegId.repo === auxThemeId.repo,
  );
  if (!isRegInRegs) {
    showErrorNotification(
      l10nT("notification.full.regNotInRegs$id", [`${auxThemeId.owner}/${auxThemeId.repo}`]),
      null,
      null,
    );
    return false;
  }
  const isAuxThemeInReg = checkAuxThemeInReg(auxThemeId, variant);
  if (!isAuxThemeInReg.success) {
    return false;
  }
  if (!isAuxThemeInReg.data.installed) {
    showErrorNotification(
      l10nT("notification.full.themeNotAvailOffline$id", [
        `${auxThemeId.publisher}/${auxThemeId.extension}/${auxThemeId.theme}`,
      ]),
      null,
      null,
    );
    return false;
  }
  const isCached = checkIfFileCached(
    "auxiliary",
    join(auxThemeId.owner, auxThemeId.repo, auxThemeId.publisher, auxThemeId.extension),
    `${auxThemeId.theme}.json`,
  );
  if (!isCached) {
    showErrorNotification(
      l10nT("notification.full.themeNotAvailOfflineUnexpected$id", [
        `${auxThemeId.publisher}/${auxThemeId.extension}/${auxThemeId.theme}`,
      ]),
      null,
      null,
    );
    return false;
  }
  return true;
};

export const getAuxThemeObj = (auxTheme: string): any => {
  const auxThemeId = getAuxThemeId(auxTheme);
  const auxThemeObj = getCachedFileContent(
    "auxiliary",
    join(auxThemeId.owner, auxThemeId.repo, auxThemeId.publisher, auxThemeId.extension),
    `${auxThemeId.theme}.json`,
  );
  return JSON.parse(auxThemeObj);
};

const checkAuxThemeRegAvail = async (auxThemeRegIds: AuxThemeRegId[]): Promise<boolean> => {
  for (const auxThemeRegId of auxThemeRegIds) {
    const doesRepoExist = await checkRepo(auxThemeRegId.owner, auxThemeRegId.repo);
    if (!doesRepoExist.success) {
      showErrorNotification(
        l10nT("notification.lead.requestFailed$msg", [doesRepoExist.message]),
        null,
        null,
      );
      return false;
    }
  }
  return true;
};

const auxThemeRegHasUpdates = async (auxThemeRegId: AuxThemeRegId): Promise<OnlineResult> => {
  const indexContent = getCachedFileContent(
    "auxiliary",
    join(auxThemeRegId.owner, auxThemeRegId.repo),
    "index.json",
  );
  const auxThemeRegVer = (JSON.parse(indexContent) as AuxThemeRegIndex).version;
  const latestVerTag = await getLatestVerTag(auxThemeRegId.owner, auxThemeRegId.repo);
  if (!latestVerTag.success) {
    showErrorNotification(
      l10nT("notification.lead.requestFailed$msg", [latestVerTag.message]),
      null,
      null,
    );
    return { success: false, message: latestVerTag.message, data: null };
  } else {
    const auxThemeRegLatestVer = latestVerTag.data;
    if (auxThemeRegVer === auxThemeRegLatestVer) {
      return {
        success: true,
        message: latestVerTag.message,
        data: false,
      };
    }
  }
  return {
    success: true,
    message: latestVerTag.message,
    data: true,
  };
};

const getAuxThemeRegIndex = async (auxThemeRegId: AuxThemeRegId): Promise<boolean> => {
  const latestVerTag = await getLatestVerTag(auxThemeRegId.owner, auxThemeRegId.repo);
  if (!latestVerTag.success) {
    showErrorNotification(
      l10nT("notification.lead.requestFailed$msg", [latestVerTag.message]),
      null,
      null,
    );
    return false;
  }
  const auxThemeRegLatestVer = latestVerTag.data;
  const indexContent = await getContentFromRelease(
    auxThemeRegId.owner,
    auxThemeRegId.repo,
    "index.json",
    auxThemeRegLatestVer,
  );
  if (!indexContent.success) {
    showErrorNotification(
      l10nT("notification.lead.requestFailed$msg", [indexContent.message]),
      null,
      null,
    );
    return false;
  }
  const data = JSON.parse(indexContent.data);
  if (!isAuxThemeRegIndex(data)) {
    showErrorNotification(
      l10nT("notification.full.invalidReg$id", [`${auxThemeRegId.owner}/${auxThemeRegId.repo}`]),
      null,
      null,
    );
    return false;
  }
  const auxThemeRegIndex = data as AuxThemeRegIndex;
  return await cacheFile(
    "auxiliary",
    join(auxThemeRegId.owner, auxThemeRegId.repo),
    "index.json",
    JSON.stringify(auxThemeRegIndex, null, 2),
  )
    .then(() => {
      return true;
    })
    .catch((error: NodeJS.ErrnoException) => {
      showErrorNotification(
        l10nT("notification.lead.cachingFailed$msg", [error.message]),
        null,
        null,
      );
      return false;
    });
};

const checkAuxThemeInReg = (auxThemeId: AuxThemeId, variant: Variant): OfflineResult => {
  const indexContent = getCachedFileContent(
    "auxiliary",
    join(auxThemeId.owner, auxThemeId.repo),
    "index.json",
  );
  const auxThemeRegIndex = JSON.parse(indexContent) as AuxThemeRegIndex;
  const auxThemeDark = auxThemeRegIndex.themes.dark.find(
    (auxThemeInfo) =>
      auxThemeInfo.publisher === auxThemeId.publisher &&
      auxThemeInfo.extension === auxThemeId.extension &&
      auxThemeInfo.theme === auxThemeId.theme,
  );
  const auxThemeLight = auxThemeRegIndex.themes.light.find(
    (auxThemeInfo) =>
      auxThemeInfo.publisher === auxThemeId.publisher &&
      auxThemeInfo.extension === auxThemeId.extension &&
      auxThemeInfo.theme === auxThemeId.theme,
  );
  switch (variant) {
    case "dark":
      if (!auxThemeDark) {
        if (auxThemeLight) {
          showErrorNotification(
            l10nT("notification.full.variantMismatch$id$variant", [
              `${auxThemeId.publisher}/${auxThemeId.extension}/${auxThemeId.theme}`,
              variant,
            ]),
            null,
            null,
          );
          return { success: false, data: null };
        } else {
          showErrorNotification(
            l10nT("notification.full.themeNotInReg$rid$tid", [
              `${auxThemeId.owner}/${auxThemeId.repo}`,
              `${auxThemeId.publisher}/${auxThemeId.extension}/${auxThemeId.theme}`,
            ]),
            null,
            null,
          );
          return { success: false, data: null };
        }
      } else {
        return { success: true, data: auxThemeDark };
      }
    case "light":
      if (!auxThemeLight) {
        if (auxThemeDark) {
          showErrorNotification(
            l10nT("notification.full.variantMismatch$id$variant", [
              `${auxThemeId.publisher}/${auxThemeId.extension}/${auxThemeId.theme}`,
              variant,
            ]),
            null,
            null,
          );
          return { success: false, data: null };
        } else {
          showErrorNotification(
            l10nT("notification.full.themeNotInReg$rid$tid", [
              `${auxThemeId.owner}/${auxThemeId.repo}`,
              `${auxThemeId.publisher}/${auxThemeId.extension}/${auxThemeId.theme}`,
            ]),
            null,
            null,
          );
          return { success: false, data: null };
        }
      } else {
        return { success: true, data: auxThemeLight };
      }
    default: {
      const exhaustiveCheck: never = variant;
      return exhaustiveCheck;
    }
  }
};

const getAuxTheme = async (auxThemeId: AuxThemeId): Promise<boolean> => {
  const indexContent = getCachedFileContent(
    "auxiliary",
    join(auxThemeId.owner, auxThemeId.repo),
    "index.json",
  );
  const auxThemeRegIndex = JSON.parse(indexContent) as AuxThemeRegIndex;
  const auxThemeRegVer = auxThemeRegIndex.version;
  let auxTheme: OnlineResult = {
    success: false,
    message: l10nT("notification.msg.unexpectedDummyData"),
    data: null,
  };
  await showProgresscopeNAtification(
    l10nT("notification.title.downloadingTheme"),
    async (progress) => {
      progress.report({
        message: `"${auxThemeId.owner}/${auxThemeId.repo}/${auxThemeId.publisher}/${auxThemeId.extension}/${auxThemeId.theme}"`,
        increment: undefined,
      });
      auxTheme = await getContentFromRelease(
        auxThemeId.owner,
        auxThemeId.repo,
        `registry/${auxThemeId.publisher}/${auxThemeId.extension}/${auxThemeId.theme}.json`,
        auxThemeRegVer,
      );
    },
  );
  if (!auxTheme.success) {
    showErrorNotification(
      l10nT("notification.lead.requestFailed$msg", [auxTheme.message]),
      null,
      null,
    );
    return false;
  }
  const auxThemeObj = JSON.parse(auxTheme.data);
  return await cacheFile(
    "auxiliary",
    join(auxThemeId.owner, auxThemeId.repo, auxThemeId.publisher, auxThemeId.extension),
    `${auxThemeId.theme}.json`,
    JSON.stringify(auxThemeObj, null, 2),
  )
    .then(async () => {
      return await updateAuxThemeCachedKey(auxThemeId, auxThemeRegIndex);
    })
    .catch((error: NodeJS.ErrnoException) => {
      showErrorNotification(
        l10nT("notification.lead.cachingFailed$msg", [error.message]),
        null,
        null,
      );
      return false;
    });
};

const updateAuxThemeCachedKey = async (
  auxThemeId: AuxThemeId,
  auxThemeRegIndex: AuxThemeRegIndex,
): Promise<boolean> => {
  const auxThemeInfo = auxThemeRegIndex.themes.dark
    .concat(auxThemeRegIndex.themes.light)
    .find(
      (auxThemeInfo) =>
        auxThemeInfo.publisher === auxThemeId.publisher &&
        auxThemeInfo.extension === auxThemeId.extension &&
        auxThemeInfo.theme === auxThemeId.theme,
    );
  if (!auxThemeInfo) {
    return false;
  }
  auxThemeInfo.installed = true;
  return await cacheFile(
    "auxiliary",
    join(auxThemeId.owner, auxThemeId.repo),
    "index.json",
    JSON.stringify(auxThemeRegIndex, null, 2),
  )
    .then(() => {
      return true;
    })
    .catch((error: NodeJS.ErrnoException) => {
      showErrorNotification(
        l10nT("notification.lead.cachingFailed$msg", [error.message]),
        null,
        null,
      );
      return false;
    });
};
