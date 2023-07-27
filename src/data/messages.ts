// Error messages

import { Variant } from "../@types";
import { NOTIFICATION_SIGNATURE } from "../extension/constants";
import { toggleFirstLetterCase } from "../extension/helpers";

export const invalidRegistry = (registryId: string): string => {
  return `Registry "${registryId}" is invalid! Verify that the registry conforms with the specification and/or is compatible with your Codemos Modern version.`;
};

export const cachingFailed = (message: string): string => {
  return `Write operation failed with the message "${message}". Verify that you have write permissions to the cache directory.`;
};

export const removingFailed = (message: string): string => {
  return `Remove operation failed with the message "${message}". Verify that the cache directory is not in use by any other process.`;
};

export const themeNotInRegistry = (
  registryId: string,
  themeUniqueId: string,
): string => {
  return `Registry "${registryId}" does not contain theme "${themeUniqueId}"! Verify that the theme is not removed and available in the registry.`;
};

export const themeVariantMismatch = (
  themeUniqueId: string,
  variant: Variant,
): string => {
  return `Auxiliary theme "${themeUniqueId}" is not a "${toggleFirstLetterCase(
    variant,
  )}" theme! Verify that Modern's variant matches with the auxiliary theme's.`;
};

export const unexpectedVariantError = (variant: Variant): string => {
  return `Unexpected variant "${variant}"! Please Contact with Codemos.`;
};

// Progress messages

export const downloadingIndexesTitle = (): string => {
  return `${NOTIFICATION_SIGNATURE} Downloading registry indexes...`;
};

export const downloadingIndexProgress = (registryId: string): string => {
  return `${downloadingIndexesTitle()} - "${registryId}"`;
};

export const updatingIndexesTitle = (): string => {
  return `${NOTIFICATION_SIGNATURE} Updating registry indexes...`;
};

export const updatingIndexProgress = (registryId: string): string => {
  return `${updatingIndexesTitle()} - "${registryId}"`;
};
