type RGB = [number, number, number];
type HSL = [number, number, number];

const regexHex = /[0-9A-Fa-f]{6}/g;
export function checkHex(hex: string): boolean {
  return hex.match(regexHex) !== null;
}

function hexToRgb(hex: string): RGB {
  const value = parseInt(hex, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return [r, g, b] as RGB;
}

function rgbToHsl(rgb: RGB): HSL {
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
}

function hslToHex(hsl: HSL): string {
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
}

function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export function contrastChecker(hex: string, referenceHex: string): boolean {
  const fgRGB = hexToRgb(hex);
  const bgRGB: RGB = hexToRgb(referenceHex);
  const contrastRatio = contrast(fgRGB, bgRGB);
  return contrastRatio < 1 / 4.5;
}

function contrast(foregroundRgb: RGB, backgroundRgb: RGB): number {
  const foregroundLuminance = luminance(foregroundRgb);
  const backgroundLuminance = luminance(backgroundRgb);
  return backgroundLuminance < foregroundLuminance
    ? (backgroundLuminance + 0.05) / (foregroundLuminance + 0.05)
    : (foregroundLuminance + 0.05) / (backgroundLuminance + 0.05);
}

function luminance(rgb: RGB): number {
  const [r, g, b] = rgb.map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
}

export function contrastBalancer(
  hex: string,
  saturation: number,
  referenceHex: string,
  willDarken: boolean
): string {
  const h = rgbToHsl(hexToRgb(hex))[0];
  const s = saturation;
  let l = willDarken ? 100 : 0;

  let found = false;
  let minimumDifference: number = Number.MAX_SAFE_INTEGER;
  let currentColor: string = hslToHex([h, s, l]);
  let prevColor: string = hslToHex([h, s, l]);
  while (!found) {
    const currentDifference = contrastCheckerValue(currentColor, referenceHex);
    if (currentDifference > minimumDifference) {
      found = true;
      break;
    }
    minimumDifference = currentDifference;
    prevColor = currentColor;
    l = willDarken ? l - 1 : l + 1;
    currentColor = hslToHex([h, s, l]);
  }
  return prevColor;
}

function contrastCheckerValue(hex: string, referenceHex: string): number {
  const fgRGB = hexToRgb(hex);
  const bgRGB: RGB = hexToRgb(referenceHex);
  const contrastRatio = contrast(fgRGB, bgRGB);
  return 1 / contrastRatio;
}
