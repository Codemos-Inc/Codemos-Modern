import { HSL, RGB } from "../@types/color";
import { AdaptiveMode } from "../@types/modern";
import { MimicInfo } from "../@types/modern/variant";
import { hex6ToRgb, hslToHex6, rgbToHsl } from "./utils";

export const transparent = "#00000000";
export const opaque = "#FFFFFFFF";

export const getHex6FromHex7 = (hex7: string): string => {
  return hex7.substring(1);
};

export const getHex7FromHex6 = (hex6: string): string => {
  return `#${hex6}`;
};

export const validateHex6 = (hex6: string): boolean => {
  return hex6.match(/[0-9A-Fa-f]{6}/g) !== null;
};

export const verifyContrast = (
  hex6: string,
  referenceHex6: string
): boolean => {
  return getContrastRatio(hex6, referenceHex6) >= 4.5;
};

export const getMimicHex7 = (
  mimicInfo: MimicInfo,
  themeAccentColor: string,
  adaptiveMode: AdaptiveMode,
  isDark: boolean
): string => {
  const hex6 = getHex6FromHex7(mimicInfo.defaultColor);
  const saturation = mimicInfo.adaptation[adaptiveMode];
  const referenceHex6 = getHex6FromHex7(themeAccentColor);
  return getHex7FromHex6(
    getBalancedHex6(hex6, saturation, referenceHex6, isDark)
  );
};

export const getHexAlpha = (percentage: number): string => {
  const hex = Math.round((percentage / 100) * 255).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const getBalancedHex6 = (
  hex6: string,
  saturation: number,
  referenceHex6: string,
  willDarken: boolean
): string => {
  const hsl: HSL = [
    rgbToHsl(hex6ToRgb(hex6))[0],
    saturation,
    willDarken ? 100 : 0,
  ];
  let found = false;
  let minimumDifference: number = Number.MAX_SAFE_INTEGER;
  let currentColor: string = hslToHex6(hsl);
  let prevColor: string = hslToHex6(hsl);
  while (!found) {
    const currentDifference = getContrastRatio(currentColor, referenceHex6);
    if (currentDifference > minimumDifference) {
      found = true;
      break;
    }
    minimumDifference = currentDifference;
    prevColor = currentColor;
    hsl[2] = willDarken ? hsl[2] - 1 : hsl[2] + 1;
    currentColor = hslToHex6(hsl);
  }
  return prevColor;
};

const getContrastRatio = (hex6: string, referenceHex6: string): number => {
  const fgRGB = hex6ToRgb(hex6);
  const bgRGB: RGB = hex6ToRgb(referenceHex6);
  const contrastRatio = getContrast(fgRGB, bgRGB);
  return 1 / contrastRatio;
};

const getContrast = (foregroundRgb: RGB, backgroundRgb: RGB): number => {
  const foregroundLuminance = getLuminance(foregroundRgb);
  const backgroundLuminance = getLuminance(backgroundRgb);
  return backgroundLuminance < foregroundLuminance
    ? (backgroundLuminance + 0.05) / (foregroundLuminance + 0.05)
    : (foregroundLuminance + 0.05) / (backgroundLuminance + 0.05);
};

const getLuminance = (rgb: RGB): number => {
  const [r, g, b] = rgb.map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
};
