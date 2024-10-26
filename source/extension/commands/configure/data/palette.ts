import { ColorThemeKind, window } from "vscode";
import type { Variant } from "../../../../@types";
import { getMimicHex7 } from "../../../../color";
import { getIntensity } from "../../../../modern/variants";
import {
  LUM_SOURCE_ALPHA as DARK_LUM_SOURCE_ALPHA,
  palette as darkPalette,
} from "../../../../modern/variants/dark/modern";
import {
  LUM_SOURCE_ALPHA as LIGHT_LUM_SOURCE_ALPHA,
  palette as lightPalette,
} from "../../../../modern/variants/light/modern";
import { intensityToAlpha } from "../../../helpers";
import { genIntensityIcons, genPaletteIcons } from "./icons";

export const prepColPalette = (variant: Variant, accent: string | null) => {
  let brown: string;
  let red: string;
  let orange: string;
  let yellow: string;
  let green: string;
  let mint: string;
  let blue: string;
  let purple: string;
  let pink: string;
  if (variant === "dark") {
    brown = darkPalette.basic.def.brown;
    red = darkPalette.basic.def.red;
    orange = darkPalette.basic.def.orange;
    yellow = darkPalette.basic.def.yellow;
    green = darkPalette.basic.def.green;
    mint = darkPalette.basic.def.mint;
    blue = darkPalette.basic.def.blue;
    purple = darkPalette.basic.def.purple;
    pink = darkPalette.basic.def.pink;
  } else {
    brown = lightPalette.basic.def.brown;
    red = lightPalette.basic.def.red;
    orange = lightPalette.basic.def.orange;
    yellow = lightPalette.basic.def.yellow;
    green = lightPalette.basic.def.green;
    mint = lightPalette.basic.def.mint;
    blue = lightPalette.basic.def.blue;
    purple = lightPalette.basic.def.purple;
    pink = lightPalette.basic.def.pink;
  }
  switch (window.activeColorTheme.kind) {
    case ColorThemeKind.Dark || ColorThemeKind.HighContrast:
      genPaletteIcons(
        variant,
        true,
        accent,
        brown,
        red,
        orange,
        yellow,
        green,
        mint,
        blue,
        purple,
        pink,
      );
      break;
    case ColorThemeKind.Light || ColorThemeKind.HighContrastLight:
      genPaletteIcons(
        variant,
        false,
        accent,
        brown,
        red,
        orange,
        yellow,
        green,
        mint,
        blue,
        purple,
        pink,
      );
      break;
    default:
      genPaletteIcons(
        variant,
        true,
        accent,
        brown,
        red,
        orange,
        yellow,
        green,
        mint,
        blue,
        purple,
        pink,
      );
      break;
  }
};

export const prepIntPalette = (variant: Variant, adaptationColor: string) => {
  let noneIntColor: string;
  let gentleIntColor: string;
  let moderateIntColor: string;
  let aggressiveIntColor: string;
  if (variant === "dark") {
    noneIntColor = getMimicHex7({
      backdropColor: adaptationColor,
      lumSourceColor: darkPalette.base,
      lumSourceAlpha: DARK_LUM_SOURCE_ALPHA,
      colSourceColor: darkPalette.base,
      colSourceAlpha: intensityToAlpha(getIntensity(variant, "none")),
    });
    gentleIntColor = getMimicHex7({
      backdropColor: adaptationColor,
      lumSourceColor: darkPalette.base,
      lumSourceAlpha: DARK_LUM_SOURCE_ALPHA,
      colSourceColor: darkPalette.base,
      colSourceAlpha: intensityToAlpha(getIntensity(variant, "gentle")),
    });
    moderateIntColor = getMimicHex7({
      backdropColor: adaptationColor,
      lumSourceColor: darkPalette.base,
      lumSourceAlpha: DARK_LUM_SOURCE_ALPHA,
      colSourceColor: darkPalette.base,
      colSourceAlpha: intensityToAlpha(getIntensity(variant, "moderate")),
    });
    aggressiveIntColor = getMimicHex7({
      backdropColor: adaptationColor,
      lumSourceColor: darkPalette.base,
      lumSourceAlpha: DARK_LUM_SOURCE_ALPHA,
      colSourceColor: darkPalette.base,
      colSourceAlpha: intensityToAlpha(getIntensity(variant, "aggressive")),
    });
  } else {
    noneIntColor = getMimicHex7({
      backdropColor: adaptationColor,
      lumSourceColor: lightPalette.base,
      lumSourceAlpha: LIGHT_LUM_SOURCE_ALPHA,
      colSourceColor: lightPalette.base,
      colSourceAlpha: intensityToAlpha(getIntensity(variant, "none")),
    });
    gentleIntColor = getMimicHex7({
      backdropColor: adaptationColor,
      lumSourceColor: lightPalette.base,
      lumSourceAlpha: LIGHT_LUM_SOURCE_ALPHA,
      colSourceColor: lightPalette.base,
      colSourceAlpha: intensityToAlpha(getIntensity(variant, "gentle")),
    });
    moderateIntColor = getMimicHex7({
      backdropColor: adaptationColor,
      lumSourceColor: lightPalette.base,
      lumSourceAlpha: LIGHT_LUM_SOURCE_ALPHA,
      colSourceColor: lightPalette.base,
      colSourceAlpha: intensityToAlpha(getIntensity(variant, "moderate")),
    });
    aggressiveIntColor = getMimicHex7({
      backdropColor: adaptationColor,
      lumSourceColor: lightPalette.base,
      lumSourceAlpha: LIGHT_LUM_SOURCE_ALPHA,
      colSourceColor: lightPalette.base,
      colSourceAlpha: intensityToAlpha(getIntensity(variant, "aggressive")),
    });
  }
  switch (window.activeColorTheme.kind) {
    case ColorThemeKind.Dark || ColorThemeKind.HighContrast:
      genIntensityIcons(
        variant,
        true,
        noneIntColor,
        gentleIntColor,
        moderateIntColor,
        aggressiveIntColor,
      );
      break;
    case ColorThemeKind.Light || ColorThemeKind.HighContrastLight:
      genIntensityIcons(
        variant,
        false,
        noneIntColor,
        gentleIntColor,
        moderateIntColor,
        aggressiveIntColor,
      );
      break;
    default:
      genIntensityIcons(
        variant,
        true,
        noneIntColor,
        gentleIntColor,
        moderateIntColor,
        aggressiveIntColor,
      );
      break;
  }
};
