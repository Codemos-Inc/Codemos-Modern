import { MimicInfo, RGB } from "../@types";
import { computeCIEDE2000 } from "./cie";
import {
  ACCENT_TEXT_MAX_CONTRAST_RATIO,
  ACCENT_TEXT_MINIMUM_COLOR_DIF,
  ACCENT_TEXT_MIN_CONTRAST_RATIO,
} from "./constants";
import { hex6ToRgb, hslToHex6, rgbToHex7, rgbToHsl, rgbToLab } from "./conversions";
import { getHex6FromHex7, getHex7FromHex6, splitHex9 } from "./utils";
import { getContrastRatioHex6, getSoftLightBlendRgb } from "./wcag";

export const validateHex6 = (value: string): boolean => {
  return value.match(/[0-9A-Fa-f]{6}/g) !== null;
};

export const getOnAccentColor = (bgHex7: string, locHex7: string, hicHex7: string): string => {
  const bgHex6 = getHex6FromHex7(bgHex7);
  const locHex6 = getHex6FromHex7(locHex7);
  const hicHex6 = getHex6FromHex7(hicHex7);
  const locContrastRatio = getContrastRatioHex6(locHex6, bgHex6);
  const hicContrastRatio = getContrastRatioHex6(hicHex6, bgHex6);
  return locContrastRatio > hicContrastRatio ? locHex7 : hicHex7;
};

export const getContrastSafeColorHex7 = (
  fgHex7: string,
  bgHex7: string,
  getsDarker: boolean,
): string | undefined => {
  const fgHex6 = getHex6FromHex7(bgHex7);
  const refHex6 = getsDarker ? "FFFFFF" : "000000";
  const safeHex6 = getContrastSafeHex6(fgHex6, refHex6, getsDarker);
  const colorDif = computeCIEDE2000(
    rgbToLab(hex6ToRgb(safeHex6)),
    rgbToLab(hex6ToRgb(getHex6FromHex7(fgHex7))),
  );
  return colorDif > ACCENT_TEXT_MINIMUM_COLOR_DIF ? getHex7FromHex6(safeHex6) : undefined;
};

// export const getMimicHex7 = (mimicInfo: MimicInfo): string => {
//   if (mimicInfo.colSourceAlpha === 1) {
//     return mimicInfo.colSourceColor;
//   }
//   const colSource = hex6ToRgb(getHex6FromHex7(mimicInfo.colSourceColor));
//   const lumSource = hex6ToRgb(getHex6FromHex7(mimicInfo.lumSourceColor));
//   const backdrop = hex6ToRgb(getHex6FromHex7(mimicInfo.backdropColor));
//   const lumBlended = getLumCompRgb(lumSource, backdrop, mimicInfo.lumSourceAlpha);
//   const colBlended = getColCompRgb(colSource, lumBlended, mimicInfo.colSourceAlpha);
//   return rgbToHex7(colBlended);
// };

export const getMimicHex7 = (mimicInfo: MimicInfo): string => {
  if (mimicInfo.colSourceAlpha === 1) {
    return mimicInfo.colSourceColor;
  }
  const colBlended = getSoftLightBlendRgb(
    hex6ToRgb(getHex6FromHex7(mimicInfo.colSourceColor)),
    hex6ToRgb(getHex6FromHex7(mimicInfo.backdropColor)),
    mimicInfo.colSourceAlpha,
  );
  return rgbToHex7(colBlended);
};

export const getMixedColorHex7 = (
  sourceHex7: string,
  sourceAlphaPercent: number,
  backdropHex7: string,
): string => {
  const sourceRgb = hex6ToRgb(getHex6FromHex7(sourceHex7));
  const backdropRgb = hex6ToRgb(getHex6FromHex7(backdropHex7));
  return rgbToHex7(getMixedColorRgb(sourceRgb, sourceAlphaPercent, backdropRgb));
};

export const getMixedColorHex9 = (sourceHex9: string, backdropHex9: string): string => {
  const [color1Hex7, color1AlphaHex] = splitHex9(sourceHex9);
  const color1AlphaPercent = getAlphaPercent(color1AlphaHex);
  return getMixedColorHex7(color1Hex7, color1AlphaPercent, splitHex9(backdropHex9)[0]);
};

const getMixedColorRgb = (sourceRgb: RGB, sourceAlphaPercent: number, backdropRgb: RGB): RGB => {
  const mixedR = Math.round(
    (sourceRgb[0] * sourceAlphaPercent + backdropRgb[0] * (100 - sourceAlphaPercent)) / 100,
  );
  const mixedG = Math.round(
    (sourceRgb[1] * sourceAlphaPercent + backdropRgb[1] * (100 - sourceAlphaPercent)) / 100,
  );
  const mixedB = Math.round(
    (sourceRgb[2] * sourceAlphaPercent + backdropRgb[2] * (100 - sourceAlphaPercent)) / 100,
  );
  return [mixedR, mixedG, mixedB];
};

export const getHexAlpha = (percent: number): string => {
  const hex = Math.round((percent / 100) * 255)
    .toString(16)
    .toUpperCase();
  return hex.length === 1 ? `0${hex}` : hex;
};

const getAlphaPercent = (alphaHex: string): number => {
  const alphaDecimal = parseInt(alphaHex, 16) / 255;
  return Math.round(alphaDecimal * 100);
};

const getContrastSafeHex6 = (hex6: string, refHex6: string, getsDarker: boolean): string => {
  const hsl = rgbToHsl(hex6ToRgb(hex6));
  let found = false;
  let curColor: string = hslToHex6(hsl);
  let prevColor: string = hslToHex6(hsl);
  while (!found) {
    const curContrastRatio = getContrastRatioHex6(curColor, refHex6);
    if (curContrastRatio > ACCENT_TEXT_MIN_CONTRAST_RATIO) {
      found = true;
      if (curContrastRatio > ACCENT_TEXT_MAX_CONTRAST_RATIO) {
        found = false;
      }
      break;
    }
    prevColor = curColor;
    hsl[2] = getsDarker ? hsl[2] - 1 : hsl[2] + 1;
    curColor = hslToHex6(hsl);
  }
  getsDarker = !getsDarker;
  while (!found) {
    const curContrastRatio = getContrastRatioHex6(curColor, refHex6);
    if (curContrastRatio < ACCENT_TEXT_MAX_CONTRAST_RATIO) {
      found = true;
      break;
    }
    prevColor = curColor;
    hsl[2] = getsDarker ? hsl[2] - 1 : hsl[2] + 1;
    curColor = hslToHex6(hsl);
  }
  return prevColor;
};
