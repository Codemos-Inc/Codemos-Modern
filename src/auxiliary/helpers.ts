import {
  AuxiliaryThemeInfo,
  AuxiliaryThemeRegistryIndex,
} from "../@types/index";

export const isAuxiliaryThemeRegistryIndex = (
  obj: any,
): obj is AuxiliaryThemeRegistryIndex => {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  if (typeof obj.version !== "string") {
    return false;
  }
  if (!Array.isArray(obj.themes.dark) || !Array.isArray(obj.themes.light)) {
    return false;
  }
  for (const theme of obj.themes.dark.concat(obj.themes.light)) {
    if (!isAuxiliaryThemeInfo(theme)) {
      return false;
    }
  }
  return true;
};

export const isAuxiliaryThemeInfo = (obj: any): obj is AuxiliaryThemeInfo => {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  obj.installed = false;
  if (
    typeof obj.publisher !== "string" ||
    typeof obj.extension !== "string" ||
    typeof obj.theme !== "string" ||
    !["Built-in", "Marketplace", "GitHub"].includes(obj.origin) ||
    typeof obj.license !== "string" ||
    typeof obj.installed !== "boolean"
  ) {
    return false;
  }
  return true;
};
