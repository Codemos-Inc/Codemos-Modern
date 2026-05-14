import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { Design, Styles, ThemeContext, Variant } from "../@types";
import {
  FISH_DIR_PATH,
  GHOSTTY_DIR_PATH,
  STARSHIP_DIR_PATH,
  STYLES_DIR_PATH,
} from "../data/paths";
import { getThemePaths } from "../extension/helpers";
import { defaultConfig } from "../modern";
import { getStyles } from "../modern/variants";
import { getThemeObj } from "../theme";
import { processTemplates, StylesMap } from "../template";

// Generate styles for all variant/design combinations
const variants: Variant[] = ["dark", "light"];
const designs: Design[] = ["flat", "minimal", "modern", "natural"];

const stylesMap: StylesMap = {} as StylesMap;
for (const variant of variants) {
  stylesMap[variant] = {} as Record<Design, Styles>;
  for (const design of designs) {
    const config = {
      ...defaultConfig,
      [variant]: { ...defaultConfig[variant], design },
    };
    stylesMap[variant][design] = getStyles(variant, config);
  }
}

// Export styles of all designs
for (const variant of variants) {
  mkdirSync(join(STYLES_DIR_PATH, variant), { recursive: true });
  for (const design of designs) {
    writeFileSync(
      join(STYLES_DIR_PATH, `${variant}/${design}.json`),
      JSON.stringify(stylesMap[variant][design], null, 2),
    );
  }
}

// Export themes
const themePaths = getThemePaths();

//  Export default vscode themes
variants.forEach((variant) => {
  const themeContext: ThemeContext = {
    textDecorations: defaultConfig.textDecorations,
    variant: variant,
    variantConfig: defaultConfig[variant],
    styles: getStyles(variant, defaultConfig),
    auxUiThemeObj: null,
    auxCodeThemeObj: null,
  };
  writeFileSync(
    themePaths.vscode[variant],
    JSON.stringify(getThemeObj(themeContext), null, 2),
  );
});

// Export other app themes
const appDirs = [FISH_DIR_PATH, GHOSTTY_DIR_PATH, STARSHIP_DIR_PATH];
for (const appDir of appDirs) {
  processTemplates(appDir, stylesMap);
}
