import { writeFileSync } from "fs";
import { ThemeContext, Variant } from "../@types";
import { getThemePaths } from "../extension/helpers";
import { defaultConfig } from "../modern";
import { getStyles } from "../modern/variants";
import { getThemeObject } from "../theme";

const themePaths = getThemePaths();
const variants: Variant[] = ["dark", "light"];
variants.map((variant) => {
  const themeContext: ThemeContext = {
    textDecorations: defaultConfig.textDecorations,
    variant: variant,
    variantConfig: defaultConfig[variant],
    styles: getStyles(variant, defaultConfig),
    auxiliaryUiThemeObject: null,
    auxiliaryCodeThemeObject: null,
  };
  writeFileSync(
    themePaths[variant],
    JSON.stringify(getThemeObject(themeContext), null, 2),
  );
});
