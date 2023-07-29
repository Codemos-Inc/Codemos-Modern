import { join } from "path";
import {
  AuxiliaryThemeId,
  AuxiliaryThemeRegistryId,
  AuxiliaryThemeRegistryIndex,
  AuxiliaryThemeRegistryIndexWithId,
  NetworkBoundResult,
  Variant,
} from "../@types";
import {
  checkIfRepoExists,
  getLatestVersionTag,
  getSingleContentFromRelease,
} from "../api";
import { isAuxiliaryThemeRegistryIndex } from "../auxiliary/helpers";
import {
  showErrorNotification,
  showProgressNotification,
} from "../extension/notifications";
import { getAuxiliaryThemeId, getAuxiliaryThemeRegistryIds } from "./helpers";
import {
  cachingFailed,
  downloadingIndexProgress,
  downloadingIndexesTitle,
  invalidRegistry,
  removingFailed,
  themeNotInRegistry,
  themeVariantMismatch,
  unexpectedVariantError,
  updatingIndexProgress,
  updatingIndexesTitle,
} from "./messages";
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
    showProgressNotification(downloadingIndexesTitle(), async (progress) => {
      const increment = 100 / uncachedAuxiliaryThemeRegistryIds.length;
      for (const auxiliaryThemeRegistryId of uncachedAuxiliaryThemeRegistryIds) {
        progress.report({
          message: downloadingIndexProgress(
            `${auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryId.repo}`,
          ),
          increment,
        });
        const result = await getAuxiliaryThemeRegistryIndex(
          auxiliaryThemeRegistryId,
        );
        if (!result) {
          success = false;
          break;
        }
      }
    });
    if (!success) {
      return false;
    }
  }
  if (obsoleteAuxiliaryThemeRegistryIds.length > 0) {
    let success = true;
    showProgressNotification(updatingIndexesTitle(), async (progress) => {
      const increment = 100 / obsoleteAuxiliaryThemeRegistryIds.length;
      for (const auxiliaryThemeRegistryId of obsoleteAuxiliaryThemeRegistryIds) {
        progress.report({
          message: updatingIndexProgress(
            `${auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryId.repo}`,
          ),
          increment,
        });
        await deleteCachedDir(
          "auxiliary",
          join(auxiliaryThemeRegistryId.owner, auxiliaryThemeRegistryId.repo),
        ).catch((error: NodeJS.ErrnoException) => {
          showErrorNotification(removingFailed(error.message), null, null);
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
    });
    if (!success) {
      return false;
    }
  }
  return true;
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
  auxiliaryTheme: string,
  variant: Variant,
): Promise<boolean> => {
  const auxiliaryThemeId = getAuxiliaryThemeId(auxiliaryTheme);
  const isAuxiliaryThemeLegit = checkAuxiliaryRegistryIndexForAuxiliaryTheme(
    auxiliaryThemeId,
    variant,
  );
  if (!isAuxiliaryThemeLegit) {
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
      showErrorNotification(networkBoundResult.message, null, null);
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
    showErrorNotification(networkBoundResult.message, null, null);
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
  const networkBoundResult1 = await getLatestVersionTag(
    auxiliaryThemeRegistryId.owner,
    auxiliaryThemeRegistryId.repo,
  );
  if (!networkBoundResult1.success) {
    showErrorNotification(networkBoundResult1.message, null, null);
    return false;
  }
  const auxiliaryThemeRegistryLatestVersion = networkBoundResult1.data;
  const networkBoundResult2 = await getSingleContentFromRelease(
    auxiliaryThemeRegistryId.owner,
    auxiliaryThemeRegistryId.repo,
    "index.json",
    auxiliaryThemeRegistryLatestVersion,
  );
  if (!networkBoundResult2.success) {
    showErrorNotification(networkBoundResult2.message, null, null);
    return false;
  }
  const data = JSON.parse(networkBoundResult2.data);
  if (!isAuxiliaryThemeRegistryIndex(data)) {
    showErrorNotification(
      invalidRegistry(
        `${auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryId.repo}`,
      ),
      null,
      null,
    );
    return false;
  }
  const auxiliaryThemeRegistryIndexObject = data as AuxiliaryThemeRegistryIndex;
  return await cacheFile(
    "auxiliary",
    join(auxiliaryThemeRegistryId.owner, auxiliaryThemeRegistryId.repo),
    "index.json",
    JSON.stringify(auxiliaryThemeRegistryIndexObject, null, 2),
  )
    .then(() => {
      return true;
    })
    .catch((error: NodeJS.ErrnoException) => {
      showErrorNotification(cachingFailed(error.message), null, null);
      return false;
    });
};

const checkAuxiliaryRegistryIndexForAuxiliaryTheme = (
  auxiliaryThemeId: AuxiliaryThemeId,
  variant: Variant,
): boolean => {
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
            themeVariantMismatch(
              `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}`,
              variant,
            ),
            null,
            null,
          );
          return false;
        } else {
          showErrorNotification(
            themeNotInRegistry(
              `${auxiliaryThemeId.owner}/${auxiliaryThemeId.repo}`,
              `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}`,
            ),
            null,
            null,
          );
          return false;
        }
      } else {
        return true;
      }
    case "light":
      if (!auxiliaryThemeLight) {
        if (auxiliaryThemeDark) {
          showErrorNotification(
            themeVariantMismatch(
              `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}`,
              variant,
            ),
            null,
            null,
          );
          return false;
        } else {
          showErrorNotification(
            themeNotInRegistry(
              `${auxiliaryThemeId.owner}/${auxiliaryThemeId.repo}`,
              `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}`,
            ),
            null,
            null,
          );
          return false;
        }
      } else {
        return true;
      }
    default:
      showErrorNotification(unexpectedVariantError(variant), null, null);
      return false;
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
  const auxiliaryThemeRegistryVersion = (
    JSON.parse(indexContents) as AuxiliaryThemeRegistryIndex
  ).version;
  const networkBoundResult = await getSingleContentFromRelease(
    auxiliaryThemeId.owner,
    auxiliaryThemeId.repo,
    `${auxiliaryThemeId.publisher}/${auxiliaryThemeId.extension}/${auxiliaryThemeId.theme}.json`,
    auxiliaryThemeRegistryVersion,
  );
  if (!networkBoundResult.success) {
    showErrorNotification(networkBoundResult.message, null, null);
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
    .then(() => {
      return true;
    })
    .catch((error: NodeJS.ErrnoException) => {
      showErrorNotification(cachingFailed(error.message), null, null);
      return false;
    });
};
