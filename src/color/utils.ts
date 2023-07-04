import { HSL, RGB } from "../@types/color";

export const hex6ToRgb = (hex6: string): RGB => {
  const value = parseInt(hex6, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return [r, g, b] as RGB;
};

export const rgbToHsl = (rgb: RGB): HSL => {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  // Calculate cMin, cMax, delta
  const cMin = Math.min(r, g, b);
  const cMax = Math.max(r, g, b);
  const delta = cMax - cMin;
  // initialize hue, saturation, lightness
  let h = 0;
  let s = 0;
  let l = 0;
  // Calculate hue
  // No difference
  if (delta === 0) {
    h = 0;
  }
  // Red is max
  else if (cMax === r) {
    h = ((g - b) / delta) % 6;
  }
  // Green is max
  else if (cMax === g) {
    h = (b - r) / delta + 2;
  }
  // Blue is max
  else {
    h = (r - g) / delta + 4;
  }
  h = Math.round(h * 60);
  // Make negative hues positive behind 360°
  if (h < 0) {
    h += 360;
  }
  // Calculate lightness
  l = (cMax + cMin) / 2;
  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return [h, s, l];
};

export const hslToHex6 = (hsl: HSL): string => {
  const h = hsl[0];
  let s = hsl[1];
  let l = hsl[2];
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const componentToHex = (c: number): string => {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};
