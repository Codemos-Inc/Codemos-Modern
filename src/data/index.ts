import { join } from "path";
import {
  AuxiliaryThemeId,
  AuxiliaryThemeRegistryId,
  AuxiliaryThemeRegistryIndex,
  AuxiliaryThemeRegistryIndexWithId,
  NetworkBoundResult,
  OfflineResult,
  Variant,
} from "../@types/index";
import {
  checkIfRepoExists,
  getLatestVersionTag,
  getSingleContentFromRelease,
} from "../api/index";
import { isAuxiliaryThemeRegistryIndex } from "../auxiliary/helpers";
import {
  showErrorNotification,
  showProgressNotification,
} from "../extension/notifications";
import { l10nT } from "../l10n/index";
import { getAuxiliaryThemeId, getAuxiliaryThemeRegistryIds } from "./helpers";
import {
  cacheFile,
  checkCacheForFile,
  checkIfFileCached,
  deleteCachedDir,
  getCachedFileContents,
} from "./utils";

export const prepareAuxiliaryThemeRegistries = async (
  auxiliaryThemeRegistries: string[],
): Promise<boolean> => {
  const auxiliaryThemeRegistryIds = getAuxiliaryThemeRegistryIds(
    auxiliaryThemeRegistries,
  );
  const areAuxiliaryThemeRegistriesAvailable =
    await verifyAvailabilityForAuxiliaryThemeRegistries(
      auxiliaryThemeRegistryIds,
    );
  if (!areAuxiliaryThemeRegistriesAvailable) {
    return false;
  }
  const uncachedAuxiliaryThemeRegistryIds: AuxiliaryThemeRegistryId[] = [];
  const obsoleteAuxiliaryThemeRegistryIds: AuxiliaryThemeRegistryId[] = [];
  for (const auxiliaryThemeRegistryId of auxiliaryThemeRegistryIds) {
    if (
      checkCacheForFile(
        "auxiliary",
        join(auxiliaryThemeRegistryId.owner, auxiliaryThemeRegistryId.repo),
        "index.json",
      )
    ) {
      const networkBoundResult = await auxiliaryThemeRegistryHasUpdates(
        auxiliaryThemeRegistryId,
      );
      if (!networkBoundResult.success) {
        return false;
      }
      if (networkBoundResult.data) {
        obsoleteAuxiliaryThemeRegistryIds.push(auxiliaryThemeRegistryId);
      }
    } else {
      uncachedAuxiliaryThemeRegistryIds.push(auxiliaryThemeRegistryId);
    }
  }
  if (uncachedAuxiliaryThemeRegistryIds.length > 0) {
    let success = true;
    await showProgressNotification(
      l10nT("notification.download.index.title"),
      async (progress) => {
        const increment = 100 / uncachedAuxiliaryThemeRegistryIds.length;
        for (const auxiliaryThemeRegistryId of uncachedAuxiliaryThemeRegistryIds) {
          progress.report({
            message: `"${auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryId.repo}"`,
            increment: increment === 100 ? undefined : increment,
          });
          const result = await getAuxiliaryThemeRegistryIndex(
            auxiliaryThemeRegistryId,
          );
          if (!result) {
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
  if (obsoleteAuxiliaryThemeRegistryIds.length > 0) {
    let success = true;
    await showProgressNotification(
      l10nT("notification.update.index.title"),
      async (progress) => {
        const increment = 100 / obsoleteAuxiliaryThemeRegistryIds.length;
        for (const auxiliaryThemeRegistryId of obsoleteAuxiliaryThemeRegistryIds) {
          progress.report({
            message: `"${auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryId.repo}"`,
            increment: increment === 100 ? undefined : increment,
          });
          await deleteCachedDir(
            "auxiliary",
            join(auxiliaryThemeRegistryId.owner, auxiliaryThemeRegistryId.repo),
          ).catch((error: NodeJS.ErrnoException) => {
            showErrorNotification(
              l10nT("notification.remove.index.error$msg", [error.message]),
              null,
              null,
            );
            success = false;
          });
          if (!success) {
            break;
          }
          const result = await getAuxiliaryThemeRegistryIndex(
            auxiliaryThemeRegistryId,
          );
          if (!result) {
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

export const prepareAuxiliaryThemeRegistriesOffline = (
  auxiliaryThemeRegistries: string[],
): boolean => {
  const auxiliaryThemeRegistryIds = getAuxiliaryThemeRegistryIds(
    auxiliaryThemeRegistries,
  );
  let success = true;
  for (const auxiliaryThemeRegistryId of auxiliaryThemeRegistryIds) {
    if (
      !checkCacheForFile(
        "auxiliary",
        join(auxiliaryThemeRegistryId.owner, auxiliaryThemeRegistryId.repo),
        "index.json",
      )
    ) {
      showErrorNotification(
        l10nT("notification.error.registryNotAvailableOffline$id", [
          `${auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryId.repo}`,
        ]),
        null,
        null,
      );
      success = false;
      break;
    } else {
      const indexContents = getCachedFileContents(
        "auxiliary",
        join(auxiliaryThemeRegistryId.owner, auxiliaryThemeRegistryId.repo),
        "index.json",
      );
      const data = JSON.parse(indexContents);
      if (!isAuxiliaryThemeRegistryIndex(data)) {
        showErrorNotification(
          l10nT("notification.error.invalidRegistry$id", [
            `${auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryId.repo}`,
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

export const getAllAuxiliaryThemeRegistryIndexes = (
  auxiliaryThemeRegistries: string[],
): AuxiliaryThemeRegistryIndexWithId[] => {
  const auxiliaryThemeRegistryIds = getAuxiliaryThemeRegistryIds(
    auxiliaryThemeRegistries,
  );
  const auxiliaryThemeRegistryIndexesWithId: AuxiliaryThemeRegistryIndexWithId[] =
    [];
  for (const auxiliaryThemeRegistryId of auxiliaryThemeRegistryIds) {
    const indexContents = getCachedFileContents(
      "auxiliary",
      join(auxiliaryThemeRegistryId.owner, auxiliaryThemeRegistryId.repo),
      "index.json",
    );
    const auxiliaryThemeRegistryIndex = JSON.parse(
      indexContents,
    ) as AuxiliaryThemeRegistryIndex;
    auxiliaryThemeRegistryIndexesWithId.push({
      auxiliaryThemeRegistryId,
      auxiliaryThemeRegistryIndex,
    });
  }
  return auxiliaryThemeRegistryIndexesWithId;
};

export const prepareAuxiliaryTheme = async (
  auxiliaryThemeRegistries: string[],
  auxiliaryTheme: string,
  variant: Variant,
): Promise<boolean> => {
  const auxiliaryThemeRegistryIds = getAuxiliaryThemeRegistryIds(
    auxiliaryThemeRegistries,
  );
  const auxiliaryThemeId = getAuxiliaryThemeId(auxiliaryTheme);
  const isRegistryInRegistries = auxiliaryThemeRegistryIds.some(
    (auxiliaryThemeRegistryId) =>
      auxiliaryThemeRegistryId.owner === auxiliaryThemeId.owner &&
      auxiliaryThemeRegistryId.repo === auxiliaryThemeId.repo,
  );
  if (!isRegistryInRegistries) {
    showErrorNotification(
      l10nT("notification.error.registryNotInRegistries$id", [
        `${auxiliaryThemeId.owner}/${auxiliaryThemeId.repo}`,
      ]),
      null,
      null,
    );
    return false;
  }
  const checkResult = checkAuxiliaryRegistryIndexForAuxiliaryTheme(
    auxiliaryThemeId,
    variant,
  );
  if (!checkResult.success) {
    return false;
  }
  const isCached = checkIfFileCached(
    "auxiliary",
    join(
      auxiliaryThemeId.owner,
      auxiliaryThemeId.repo,
      auxiliaryThemeId.publisher,
      auxiliaryThemeId.extension,
    ),
    `${auxiliaryThemeId.theme}.json`,
  );
  if (isCached) {
    return true;
  }
  return await getAuxiliaryTheme(auxiliaryThemeId);
};

export const prepareAuxiliaryThemeOffline = async (
  auxiliaryThemeRegistries: string[],
  auxiliaryTheme: string,
  variant: Variant,
): Promise<boolean> => {
  const auxiliaryThemeRegistryIds = getAuxiliaryThemeRegistryIds(
    auxiliaryThemeRegistries,
  );
  const auxiliaryThemeId = getAuxiliaryThemeId(auxiliaryTheme);
  const isRegistryInRegistries = auxiliaryThemeRegistryIds.some(
    (auxiliaryThemeRegistryId) =>
      auxiliaryThemeRegistryId.owner === auxiliaryThemeId.owner &&
      auxiliaryThemeRegistryId.repo === auxiliaryThemeId.repo,
  );
  if (!isRegistryInRegistries) {
    showErrorNotification(
      l10nT("notification.error.registryNotInRegistries$id", [
        `${auxiliaryThemeId.owner}/${auxiliaryThemeId.repo}`,
      ]),
      null,
      null,
    );
    return false;
  }
  const checkResult = checkAuxiliaryRegistryIndexForAuxiliaryTheme(
    auxiliaryThemeId,
    variant,
  );
  if (!checkResult.success) {
    return false;
  }
  if (!checkResult.data.installed) {
    showErrorNotification(
      l10nT("notification.error.themeNotAvailableOffline$id", [
        `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}`,
      ]),
      null,
      null,
    );
    return false;
  }
  const isCached = checkIfFileCached(
    "auxiliary",
    join(
      auxiliaryThemeId.owner,
      auxiliaryThemeId.repo,
      auxiliaryThemeId.publisher,
      auxiliaryThemeId.extension,
    ),
    `${auxiliaryThemeId.theme}.json`,
  );
  if (!isCached) {
    showErrorNotification(
      l10nT("notification.error.themeNotAvailableOfflineUnexpected$id", [
        `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}`,
      ]),
      null,
      null,
    );
    return false;
  }
  return true;
};

export const getAuxiliaryThemeObject = (auxiliaryTheme: string): any => {
  const auxiliaryThemeId = getAuxiliaryThemeId(auxiliaryTheme);
  const auxiliaryThemeObject = getCachedFileContents(
    "auxiliary",
    join(
      auxiliaryThemeId.owner,
      auxiliaryThemeId.repo,
      auxiliaryThemeId.publisher,
      auxiliaryThemeId.extension,
    ),
    `${auxiliaryThemeId.theme}.json`,
  );
  return JSON.parse(auxiliaryThemeObject);
};

const verifyAvailabilityForAuxiliaryThemeRegistries = async (
  auxiliaryThemeRegistryIds: AuxiliaryThemeRegistryId[],
): Promise<boolean> => {
  for (const auxiliaryThemeRegistryId of auxiliaryThemeRegistryIds) {
    const networkBoundResult = await checkIfRepoExists(
      auxiliaryThemeRegistryId.owner,
      auxiliaryThemeRegistryId.repo,
    );
    if (!networkBoundResult.success) {
      showErrorNotification(
        l10nT("notification.error.requestFailed$msg", [
          networkBoundResult.message,
        ]),
        null,
        null,
      );
      return false;
    }
  }
  return true;
};

const auxiliaryThemeRegistryHasUpdates = async (
  auxiliaryThemeRegistryId: AuxiliaryThemeRegistryId,
): Promise<NetworkBoundResult> => {
  const indexContents = getCachedFileContents(
    "auxiliary",
    join(auxiliaryThemeRegistryId.owner, auxiliaryThemeRegistryId.repo),
    "index.json",
  );
  const auxiliaryThemeRegistryVersion = (
    JSON.parse(indexContents) as AuxiliaryThemeRegistryIndex
  ).version;
  const networkBoundResult = await getLatestVersionTag(
    auxiliaryThemeRegistryId.owner,
    auxiliaryThemeRegistryId.repo,
  );
  if (!networkBoundResult.success) {
    showErrorNotification(
      l10nT("notification.error.requestFailed$msg", [
        networkBoundResult.message,
      ]),
      null,
      null,
    );
    return { success: false, message: networkBoundResult.message, data: null };
  } else {
    const auxiliaryThemeRegistryLatestVersion = networkBoundResult.data;
    if (auxiliaryThemeRegistryVersion === auxiliaryThemeRegistryLatestVersion) {
      return {
        success: true,
        message: networkBoundResult.message,
        data: false,
      };
    }
  }
  return {
    success: true,
    message: networkBoundResult.message,
    data: true,
  };
};

const getAuxiliaryThemeRegistryIndex = async (
  auxiliaryThemeRegistryId: AuxiliaryThemeRegistryId,
): Promise<boolean> => {
  const networkBoundResultTag = await getLatestVersionTag(
    auxiliaryThemeRegistryId.owner,
    auxiliaryThemeRegistryId.repo,
  );
  if (!networkBoundResultTag.success) {
    showErrorNotification(
      l10nT("notification.error.requestFailed$msg", [
        networkBoundResultTag.message,
      ]),
      null,
      null,
    );
    return false;
  }
  const auxiliaryThemeRegistryLatestVersion = networkBoundResultTag.data;
  const networkBoundResultIndex = await getSingleContentFromRelease(
    auxiliaryThemeRegistryId.owner,
    auxiliaryThemeRegistryId.repo,
    "index.json",
    auxiliaryThemeRegistryLatestVersion,
  );
  if (!networkBoundResultIndex.success) {
    showErrorNotification(
      l10nT("notification.error.requestFailed$msg", [
        networkBoundResultIndex.message,
      ]),
      null,
      null,
    );
    return false;
  }
  const data = JSON.parse(networkBoundResultIndex.data);
  if (!isAuxiliaryThemeRegistryIndex(data)) {
    showErrorNotification(
      l10nT("notification.error.invalidRegistry$id", [
        `${auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryId.repo}`,
      ]),
      null,
      null,
    );
    return false;
  }
  const auxiliaryThemeRegistryIndex = data as AuxiliaryThemeRegistryIndex;
  return await cacheFile(
    "auxiliary",
    join(auxiliaryThemeRegistryId.owner, auxiliaryThemeRegistryId.repo),
    "index.json",
    JSON.stringify(auxiliaryThemeRegistryIndex, null, 2),
  )
    .then(() => {
      return true;
    })
    .catch((error: NodeJS.ErrnoException) => {
      showErrorNotification(
        l10nT("notification.error.cachingFailed$msg", [error.message]),
        null,
        null,
      );
      return false;
    });
};

const checkAuxiliaryRegistryIndexForAuxiliaryTheme = (
  auxiliaryThemeId: AuxiliaryThemeId,
  variant: Variant,
): OfflineResult => {
  const indexContents = getCachedFileContents(
    "auxiliary",
    join(auxiliaryThemeId.owner, auxiliaryThemeId.repo),
    "index.json",
  );
  const auxiliaryThemeRegistryIndex = JSON.parse(
    indexContents,
  ) as AuxiliaryThemeRegistryIndex;
  const auxiliaryThemeDark = auxiliaryThemeRegistryIndex.themes.dark.find(
    (auxiliaryThemeInfo) =>
      auxiliaryThemeInfo.publisher === auxiliaryThemeId.publisher &&
      auxiliaryThemeInfo.extension === auxiliaryThemeId.extension &&
      auxiliaryThemeInfo.theme === auxiliaryThemeId.theme,
  );
  const auxiliaryThemeLight = auxiliaryThemeRegistryIndex.themes.light.find(
    (auxiliaryThemeInfo) =>
      auxiliaryThemeInfo.publisher === auxiliaryThemeId.publisher &&
      auxiliaryThemeInfo.extension === auxiliaryThemeId.extension &&
      auxiliaryThemeInfo.theme === auxiliaryThemeId.theme,
  );
  switch (variant) {
    case "dark":
      if (!auxiliaryThemeDark) {
        if (auxiliaryThemeLight) {
          showErrorNotification(
            l10nT("notification.error.themeVariantMismatch$id$variant", [
              `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}`,
              variant,
            ]),
            null,
            null,
          );
          return { success: false, data: null };
        } else {
          showErrorNotification(
            l10nT("notification.error.themeNotInRegistry$rid$tid", [
              `${auxiliaryThemeId.owner}/${auxiliaryThemeId.repo}`,
              `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}`,
            ]),
            null,
            null,
          );
          return { success: false, data: null };
        }
      } else {
        return { success: true, data: auxiliaryThemeDark };
      }
    case "light":
      if (!auxiliaryThemeLight) {
        if (auxiliaryThemeDark) {
          showErrorNotification(
            l10nT("notification.error.themeVariantMismatch$id$variant", [
              `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}`,
              variant,
            ]),
            null,
            null,
          );
          return { success: false, data: null };
        } else {
          showErrorNotification(
            l10nT("notification.error.themeNotInRegistry$rid$tid", [
              `${auxiliaryThemeId.owner}/${auxiliaryThemeId.repo}`,
              `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}`,
            ]),
            null,
            null,
          );
          return { success: false, data: null };
        }
      } else {
        return { success: true, data: auxiliaryThemeLight };
      }
    default: {
      const exhaustiveCheck: never = variant;
      return exhaustiveCheck;
    }
  }
};

const getAuxiliaryTheme = async (
  auxiliaryThemeId: AuxiliaryThemeId,
): Promise<boolean> => {
  const indexContents = getCachedFileContents(
    "auxiliary",
    join(auxiliaryThemeId.owner, auxiliaryThemeId.repo),
    "index.json",
  );
  const auxiliaryThemeRegistryIndex = JSON.parse(
    indexContents,
  ) as AuxiliaryThemeRegistryIndex;
  const auxiliaryThemeRegistryVersion = auxiliaryThemeRegistryIndex.version;
  let networkBoundResult: NetworkBoundResult = {
    success: false,
    message: l10nT("message.error.unexpectedDummyData"),
    data: null,
  };
  await showProgressNotification(
    l10nT("notification.download.theme.title"),
    async (progress) => {
      progress.report({
        message: `"${auxiliaryThemeId.owner}/${auxiliaryThemeId.repo}/${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}"`,
        increment: undefined,
      });
      networkBoundResult = await getSingleContentFromRelease(
        auxiliaryThemeId.owner,
        auxiliaryThemeId.repo,
        `registry/${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}.json`,
        auxiliaryThemeRegistryVersion,
      );
    },
  );
  if (!networkBoundResult.success) {
    showErrorNotification(
      l10nT("notification.error.requestFailed$msg", [
        networkBoundResult.message,
      ]),
      null,
      null,
    );
    return false;
  }
  const data = JSON.parse(networkBoundResult.data);
  return await cacheFile(
    "auxiliary",
    join(
      auxiliaryThemeId.owner,
      auxiliaryThemeId.repo,
      auxiliaryThemeId.publisher,
      auxiliaryThemeId.extension,
    ),
    `${auxiliaryThemeId.theme}.json`,
    JSON.stringify(data, null, 2),
  )
    .then(async () => {
      return await updateAuxiliaryThemeCachedKey(
        auxiliaryThemeId,
        auxiliaryThemeRegistryIndex,
      );
    })
    .catch((error: NodeJS.ErrnoException) => {
      showErrorNotification(
        l10nT("notification.error.cachingFailed$msg", [error.message]),
        null,
        null,
      );
      return false;
    });
};

const updateAuxiliaryThemeCachedKey = async (
  auxiliaryThemeId: AuxiliaryThemeId,
  auxiliaryThemeRegistryIndex: AuxiliaryThemeRegistryIndex,
): Promise<boolean> => {
  const auxiliaryTheme = auxiliaryThemeRegistryIndex.themes.dark
    .concat(auxiliaryThemeRegistryIndex.themes.light)
    .find(
      (auxiliaryThemeInfo) =>
        auxiliaryThemeInfo.publisher === auxiliaryThemeId.publisher &&
        auxiliaryThemeInfo.extension === auxiliaryThemeId.extension &&
        auxiliaryThemeInfo.theme === auxiliaryThemeId.theme,
    );
  if (!auxiliaryTheme) {
    return false;
  }
  auxiliaryTheme.installed = true;
  return await cacheFile(
    "auxiliary",
    join(auxiliaryThemeId.owner, auxiliaryThemeId.repo),
    "index.json",
    JSON.stringify(auxiliaryThemeRegistryIndex, null, 2),
  )
    .then(() => {
      return true;
    })
    .catch((error: NodeJS.ErrnoException) => {
      showErrorNotification(
        l10nT("notification.error.cachingFailed$msg", [error.message]),
        null,
        null,
      );
      return false;
    });
};
