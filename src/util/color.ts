type RGB = [number, number, number];
type HSL = [number, number, number];

const regexHEX = /[0-9A-Fa-f]{6}/g;
export function checkHEX(HEX: string): boolean {
  return HEX.match(regexHEX) !== null;
}

function HEXtoRGB(HEX: string): RGB {
  const value = parseInt(HEX, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return [r, g, b] as RGB;
}

function RGBToHSL(RGB: RGB): HSL {
  const r = RGB[0] / 255;
  const g = RGB[1] / 255;
  const b = RGB[2] / 255;
  // Calculat cmin, cmax, delta
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  // initialize hue, saturation, lightness
  let h = 0;
  let s = 0;
  let l = 0;
  // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  // Make negative hues positive behind 360°
  if (h < 0)
    h += 360;
  // Calculate lightness
  l = (cmax + cmin) / 2;
  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return [h, s, l];
}

function HSLtoHEX(HSL: HSL): string {
  let [h, s, l] = HSL;
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
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

export function contrastChecker(HEX: string, referenceHEX: string): boolean {
  const fgRGB = HEXtoRGB(HEX);
  const bgRGB: RGB = HEXtoRGB(referenceHEX);
  const contrastRatio = contrast(fgRGB, bgRGB);
  return contrastRatio < 1 / 4.5;
}

function contrast(foregroundRGB: RGB, backgroundRGB: RGB): number {
  const foregroundLumiance = luminance(foregroundRGB);
  const backgroundLuminance = luminance(backgroundRGB);
  return backgroundLuminance < foregroundLumiance
    ? (backgroundLuminance + 0.05) / (foregroundLumiance + 0.05)
    : (foregroundLumiance + 0.05) / (backgroundLuminance + 0.05);
}

function luminance(RGB: RGB): number {
  const [r, g, b] = RGB.map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
}

export function contrastBalancer(
  HEX: string,
  saturation: number,
  referenceHEX: string,
  willDarken: boolean
): string {
  const h = RGBToHSL(HEXtoRGB(HEX))[0];
  const s = saturation;
  let l = willDarken ? 100 : 0;

  let found: boolean = false;
  let minimumDifference: number = Number.MAX_SAFE_INTEGER;
  let currentColor: string = HSLtoHEX([h, s, l]);
  let prevColor: string = HSLtoHEX([h, s, l]);
  while (!found) {
    let currentDifference = contrastCheckerValue(currentColor, referenceHEX);
    if (currentDifference > minimumDifference) {
      found = true;
      break;
    }
    minimumDifference = currentDifference;
    prevColor = currentColor;
    l = willDarken ? l - 1 : l + 1;
    currentColor = HSLtoHEX([h, s, l]);
  }
  return prevColor;
}

function contrastCheckerValue(HEX: string, referenceHEX: string): number {
  const fgRGB = HEXtoRGB(HEX);
  const bgRGB: RGB = HEXtoRGB(referenceHEX);
  const contrastRatio = contrast(fgRGB, bgRGB);
  return 1 / contrastRatio;
}