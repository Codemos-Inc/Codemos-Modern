import { AdaptiveMode, HSL, MimicInfo, RGB } from "../@types";
import { computeCIEDE2000 } from "./cie";
import {
  ACCENT_TEXT_MAX_CONTRAST_RATIO,
  ACCENT_TEXT_MINIMUM_COLOR_DIF,
  ACCENT_TEXT_MIN_CONTRAST_RATIO,
} from "./constants";
import { hex6ToRgb, hslToHex6, rgbToHex7, rgbToHsl, rgbToLab } from "./conversions";
import { getHex6FromHex7, getHex7FromHex6, splitHex9 } from "./utils";
import { getContrastRatioHex6 } from "./wcag";

export const validateHex6 = (value: string): boolean => {
  return value.match(/[0-9A-Fa-f]{6}/g) !== null;
};

export const chooseTextOnColor = (
  accentColorHex7: string,
  locHex7: string,
  hicHex7: string,
): string => {
  const accentColorHex6 = getHex6FromHex7(accentColorHex7);
  const locHex6 = getHex6FromHex7(locHex7);
  const hicHex6 = getHex6FromHex7(hicHex7);
  const locContrastRatio = getContrastRatioHex6(locHex6, accentColorHex6);
  const hicContrastRatio = getContrastRatioHex6(hicHex6, accentColorHex6);
  return locContrastRatio > hicContrastRatio ? locHex7 : hicHex7;
};

export const getContrastSafeAccentColorHex7 = (
  accentColorHex7: string,
  foregroundColorHex7: string,
  getsDarker: boolean,
): string | undefined => {
  const accentColorHex6 = getHex6FromHex7(accentColorHex7);
  const referenceHex6 = getsDarker ? "FFFFFF" : "000000";
  const safeAccentHex6 = getContrastSafeHex6(accentColorHex6, referenceHex6, getsDarker);
  const colorDif = computeCIEDE2000(
    rgbToLab(hex6ToRgb(safeAccentHex6)),
    rgbToLab(hex6ToRgb(getHex6FromHex7(foregroundColorHex7))),
  );
  return colorDif > ACCENT_TEXT_MINIMUM_COLOR_DIF ? getHex7FromHex6(safeAccentHex6) : undefined;
};

export const getMimicHex7 = (
  mimicInfo: MimicInfo,
  accentColorHex7: string,
  adaptiveMode: AdaptiveMode,
  getsDarker: boolean,
): string => {
  if (adaptiveMode === "none") {
    return mimicInfo.none.referenceColor;
  }
  const hex6 = getHex6FromHex7(accentColorHex7);
  const saturation = mimicInfo[adaptiveMode].saturation;
  const referenceHex6 = getHex6FromHex7(mimicInfo[adaptiveMode].referenceColor);
  return getHex7FromHex6(getBalancedHex6(hex6, saturation, referenceHex6, getsDarker));
};

export const getMixedColorHex7 = (
  color1Hex7: string,
  color1AlphaPercentage: number,
  color2Hex7: string,
): string => {
  const color1Rgb = hex6ToRgb(getHex6FromHex7(color1Hex7));
  const color2Rgb = hex6ToRgb(getHex6FromHex7(color2Hex7));
  return rgbToHex7(getMixedColorRgb(color1Rgb, color1AlphaPercentage, color2Rgb));
};

export const getMixedColorHex9 = (color1Hex9: string, color2Hex9: string): string => {
  const [color1Hex7, color1AlphaHex] = splitHex9(color1Hex9);
  const color1AlphaPercentage = getAlphaPercentage(color1AlphaHex);
  return getMixedColorHex7(color1Hex7, color1AlphaPercentage, splitHex9(color2Hex9)[0]);
};

const getMixedColorRgb = (color1Rgb: RGB, color1AlphaPercentage: number, color2Rgb: RGB): RGB => {
  const mixedR = Math.round(
    (color1Rgb[0] * color1AlphaPercentage + color2Rgb[0] * (100 - color1AlphaPercentage)) / 100,
  );
  const mixedG = Math.round(
    (color1Rgb[1] * color1AlphaPercentage + color2Rgb[1] * (100 - color1AlphaPercentage)) / 100,
  );
  const mixedB = Math.round(
    (color1Rgb[2] * color1AlphaPercentage + color2Rgb[2] * (100 - color1AlphaPercentage)) / 100,
  );
  return [mixedR, mixedG, mixedB];
};

export const getHexAlpha = (percentage: number): string => {
  const hex = Math.round((percentage / 100) * 255)
    .toString(16)
    .toUpperCase();
  return hex.length === 1 ? `0${hex}` : hex;
};

const getAlphaPercentage = (alphaHex: string): number => {
  const alphaDecimal = parseInt(alphaHex, 16) / 255;
  return Math.round(alphaDecimal * 100);
};

const getContrastSafeHex6 = (hex6: string, referenceHex6: string, getsDarker: boolean): string => {
  const hsl = rgbToHsl(hex6ToRgb(hex6));
  let found = false;
  let currentColor: string = hslToHex6(hsl);
  let prevColor: string = hslToHex6(hsl);
  while (!found) {
    const currentContrastRatio = getContrastRatioHex6(currentColor, referenceHex6);
    if (currentContrastRatio > ACCENT_TEXT_MIN_CONTRAST_RATIO) {
      found = true;
      if (currentContrastRatio > ACCENT_TEXT_MAX_CONTRAST_RATIO) {
        found = false;
      }
      break;
    }
    prevColor = currentColor;
    hsl[2] = getsDarker ? hsl[2] - 1 : hsl[2] + 1;
    currentColor = hslToHex6(hsl);
  }
  getsDarker = !getsDarker;
  while (!found) {
    const currentContrastRatio = getContrastRatioHex6(currentColor, referenceHex6);
    if (currentContrastRatio < ACCENT_TEXT_MAX_CONTRAST_RATIO) {
      found = true;
      break;
    }
    prevColor = currentColor;
    hsl[2] = getsDarker ? hsl[2] - 1 : hsl[2] + 1;
    currentColor = hslToHex6(hsl);
  }

  return prevColor;
};

const getBalancedHex6 = (
  hex6: string,
  saturation: number,
  referenceHex6: string,
  getsDarker: boolean,
): string => {
  const hsl: HSL = rgbToHsl(hex6ToRgb(hex6));
  hsl[1] = hsl[1] === 0 ? 0 : saturation; // We want to preserve the original saturation if it's 0
  hsl[2] = getsDarker ? 100 : 0; // We want to start from the darkest or lightest color
  let found = false;
  let minimumContrastRatio: number = Number.MAX_SAFE_INTEGER;
  let currentColor: string = hslToHex6(hsl);
  let prevColor: string = currentColor;
  while (!found) {
    const currentContrastRatio = getContrastRatioHex6(currentColor, referenceHex6);
    if (currentContrastRatio > minimumContrastRatio) {
      found = true;
      break;
    }
    minimumContrastRatio = currentContrastRatio;
    prevColor = currentColor;
    hsl[2] = getsDarker ? hsl[2] - 1 : hsl[2] + 1;
    currentColor = hslToHex6(hsl);
  }
  return prevColor;
};
