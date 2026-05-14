import { MimicInfo, RGB } from "../@types";
import { computeCIEDE2000 } from "./cie";
import {
  ACCENT_MAX_CONTRAST_RATIO,
  ACCENT_MIN_CONTRAST_RATIO,
  ACCENT_MINIMUM_COLOR_DIF,
} from "./constants";
import {
  hex6ToRgb,
  hslToHex6,
  rgbToHex7,
  rgbToHsl,
  rgbToLab,
} from "./conversions";
import { getHex6FromHex7, getHex7FromHex6, splitHex9 } from "./utils";
import { getColCompRgb, getContrastRatioHex6, getLumCompRgb } from "./wcag";

export function validateHex6(value: string): boolean {
  return value.match(/[0-9A-Fa-f]{6}/g) !== null;
}

export function getOnAccentColor(
  bgHex7: string,
  locHex7: string,
  hicHex7: string,
): string {
  const bgHex6 = getHex6FromHex7(bgHex7);
  const locHex6 = getHex6FromHex7(locHex7);
  const hicHex6 = getHex6FromHex7(hicHex7);
  const locContrastRatio = getContrastRatioHex6(locHex6, bgHex6);
  const hicContrastRatio = getContrastRatioHex6(hicHex6, bgHex6);
  return locContrastRatio > hicContrastRatio ? locHex7 : hicHex7;
}

export function getContrastSafeColorHex7(
  fgHex7: string,
  bgHex7: string,
  getsDarker: boolean,
): string | undefined {
  const bgHex6 = getHex6FromHex7(bgHex7);
  const refHex6 = getsDarker ? "FFFFFF" : "000000";
  const safeBgHex6 = getContrastSafeHex6(bgHex6, refHex6, getsDarker);
  const colorDif = computeCIEDE2000(
    rgbToLab(hex6ToRgb(safeBgHex6)),
    rgbToLab(hex6ToRgb(getHex6FromHex7(fgHex7))),
  );
  return colorDif > ACCENT_MINIMUM_COLOR_DIF
    ? getHex7FromHex6(safeBgHex6)
    : undefined;
}

export function getMimicHex7(mimicInfo: MimicInfo): string {
  if (mimicInfo.colSourceAlpha === 1) {
    return mimicInfo.colSourceColor;
  }
  const colSource = hex6ToRgb(getHex6FromHex7(mimicInfo.colSourceColor));
  const lumSource = hex6ToRgb(getHex6FromHex7(mimicInfo.lumSourceColor));
  const backdrop = hex6ToRgb(getHex6FromHex7(mimicInfo.backdropColor));
  const lumBlended = getLumCompRgb(
    lumSource,
    backdrop,
    mimicInfo.lumSourceAlpha,
  );
  const colBlended = getColCompRgb(
    colSource,
    lumBlended,
    mimicInfo.colSourceAlpha,
  );
  return rgbToHex7(colBlended);
}

export function getMixedColorHex7(
  sourceHex7: string,
  sourceAlphaPercent: number,
  backdropHex7: string,
): string {
  const sourceRgb = hex6ToRgb(getHex6FromHex7(sourceHex7));
  const backdropRgb = hex6ToRgb(getHex6FromHex7(backdropHex7));
  return rgbToHex7(
    getMixedColorRgb(sourceRgb, sourceAlphaPercent, backdropRgb),
  );
}

export function getMixedColorHex9(
  sourceHex9: string,
  backdropHex9: string,
): string {
  const [color1Hex7, color1AlphaHex] = splitHex9(sourceHex9);
  const color1AlphaPercent = getAlphaPercent(color1AlphaHex);
  return `${getMixedColorHex7(
    color1Hex7,
    color1AlphaPercent,
    splitHex9(backdropHex9)[0],
  )}FF`;
}

function getMixedColorRgb(
  sourceRgb: RGB,
  sourceAlphaPercent: number,
  backdropRgb: RGB,
): RGB {
  const mixedR = Math.round(
    (sourceRgb[0] * sourceAlphaPercent +
      backdropRgb[0] * (100 - sourceAlphaPercent)) /
      100,
  );
  const mixedG = Math.round(
    (sourceRgb[1] * sourceAlphaPercent +
      backdropRgb[1] * (100 - sourceAlphaPercent)) /
      100,
  );
  const mixedB = Math.round(
    (sourceRgb[2] * sourceAlphaPercent +
      backdropRgb[2] * (100 - sourceAlphaPercent)) /
      100,
  );
  return [mixedR, mixedG, mixedB];
}

export function getHexAlpha(percent: number): string {
  const hex = Math.round((percent / 100) * 255)
    .toString(16)
    .toUpperCase();
  return hex.length === 1 ? `0${hex}` : hex;
}

function getAlphaPercent(alphaHex: string): number {
  const alphaDecimal = parseInt(alphaHex, 16) / 255;
  return Math.round(alphaDecimal * 100);
}

function getContrastSafeHex6(
  hex6: string,
  refHex6: string,
  getsDarker: boolean,
): string {
  const hsl = rgbToHsl(hex6ToRgb(hex6));

  // Phase 1: Adjust lightness until contrast exceeds minimum
  let color = hslToHex6(hsl);
  let prevColor = color;
  while (getContrastRatioHex6(color, refHex6) <= ACCENT_MIN_CONTRAST_RATIO) {
    prevColor = color;
    hsl[2] = getsDarker ? hsl[2] - 1 : hsl[2] + 1;
    color = hslToHex6(hsl);
  }

  // Within [MIN, MAX] — done
  if (getContrastRatioHex6(color, refHex6) <= ACCENT_MAX_CONTRAST_RATIO) {
    return prevColor;
  }

  // Phase 2: Overshot MAX — reverse direction and walk back to the boundary
  while (getContrastRatioHex6(color, refHex6) >= ACCENT_MAX_CONTRAST_RATIO) {
    prevColor = color;
    hsl[2] = getsDarker ? hsl[2] + 1 : hsl[2] - 1;
    color = hslToHex6(hsl);
  }
  return prevColor;
}
