import { RGB } from "../@types";
import { hex6ToRgb } from "./conversions";

export const getContrastRatioHex6 = (hex6: string, refHex6: string): number => {
  const fgRgb = hex6ToRgb(hex6);
  const bgRgb: RGB = hex6ToRgb(refHex6);
  const contrastRatio = getContrastRgb(fgRgb, bgRgb);
  return 1 / contrastRatio;
};

export const getLumCompRgb = (source: RGB, backdrop: RGB, alpha: number): RGB => {
  normalizeRgb(source);
  normalizeRgb(backdrop);
  const blended: RGB = setLumRgb(backdrop, getLumBlendRgb(source));
  const result: RGB = getAlphaCompRgb(backdrop, blended, alpha);
  denormalizeRgb(result);
  return result;
};

export const getColCompRgb = (source: RGB, backdrop: RGB, alpha: number): RGB => {
  normalizeRgb(source);
  normalizeRgb(backdrop);
  const blended: RGB = setLumRgb(source, getLumBlendRgb(backdrop));
  const result: RGB = getAlphaCompRgb(backdrop, blended, alpha);
  denormalizeRgb(result);
  return result;
};

export const getSoftLightBlendRgb = (source: RGB, backdrop: RGB, alpha: number): RGB => {
  normalizeRgb(source);
  normalizeRgb(backdrop);
  const result: RGB = [
    getSoftLightBlendChannelRgb(source[0], backdrop[0], alpha),
    getSoftLightBlendChannelRgb(source[1], backdrop[1], alpha),
    getSoftLightBlendChannelRgb(source[2], backdrop[2], alpha),
  ];
  denormalizeRgb(result);
  return result;
};

const getContrastRgb = (fgRgb: RGB, bgRgb: RGB): number => {
  normalizeRgb(fgRgb);
  normalizeRgb(bgRgb);
  const fgLum = getLumRgb(fgRgb);
  const bgLum = getLumRgb(bgRgb);
  return bgLum < fgLum ? (bgLum + 0.05) / (fgLum + 0.05) : (fgLum + 0.05) / (bgLum + 0.05);
};

const normalizeRgb = (rgb: RGB): void => {
  rgb[0] = rgb[0] / 255;
  rgb[1] = rgb[1] / 255;
  rgb[2] = rgb[2] / 255;
};

const denormalizeRgb = (rgb: RGB): void => {
  rgb[0] = rgb[0] * 255;
  rgb[1] = rgb[1] * 255;
  rgb[2] = rgb[2] * 255;
};

const getLumRgb = (rgb: RGB): number => {
  const [r, g, b] = rgb.map((v): number => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  if (r === undefined || g === undefined || b === undefined) {
    throw new Error("Invalid color values");
  }
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
};

const getLumBlendRgb = (rgb: RGB): number => {
  return rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
};

const clipColRgb = (color: RGB): void => {
  const lum: number = getLumBlendRgb(color);
  const minChan: number = Math.min(...color);
  const maxChan: number = Math.max(...color);
  if (minChan < 0) {
    color[0] = lum + ((color[0] - lum) * lum) / (lum - minChan);
    color[1] = lum + ((color[1] - lum) * lum) / (lum - minChan);
    color[2] = lum + ((color[2] - lum) * lum) / (lum - minChan);
  }
  if (maxChan > 1) {
    color[0] = lum + ((color[0] - lum) * (1 - lum)) / (maxChan - lum);
    color[1] = lum + ((color[1] - lum) * (1 - lum)) / (maxChan - lum);
    color[2] = lum + ((color[2] - lum) * (1 - lum)) / (maxChan - lum);
  }
};

const setLumRgb = (color: RGB, lum: number): RGB => {
  const lumDiff: number = lum - getLumBlendRgb(color);
  const result: RGB = [...color];
  result[0] += lumDiff;
  result[1] += lumDiff;
  result[2] += lumDiff;
  clipColRgb(result);
  return result;
};

const getAlphaCompRgb = (opaque: RGB, transparent: RGB, alpha: number): RGB => {
  return [
    (1 - alpha) * opaque[0] + alpha * transparent[0],
    (1 - alpha) * opaque[1] + alpha * transparent[1],
    (1 - alpha) * opaque[2] + alpha * transparent[2],
  ];
};

const getSoftLightBlendChannelRgb = (cs: number, cb: number, alpha: number): number => {
  const d = (cb: number): number => {
    return cb <= 0.25 ? ((16 * cb - 12) * cb + 4) * cb : Math.sqrt(cb);
  };

  const clamp = (value: number): number => {
    return Math.max(0, Math.min(1, value));
  };

  let Cm: number = 0;
  if (cs <= 0.5) {
    Cm = cb - (1 - 2 * cs) * cb * (1 - cb);
  } else {
    Cm = cb + (2 * cs - 1) * (d(cb) - cb);
  }
  return clamp(alpha * cs + (1 - alpha) * Cm);
};
