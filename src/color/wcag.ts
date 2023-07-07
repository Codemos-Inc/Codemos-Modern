import { RGB } from "../@types";
import { hex6ToRgb } from "./conversions";

export const getContrastRatioHex6 = (
  hex6: string,
  referenceHex6: string
): number => {
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
