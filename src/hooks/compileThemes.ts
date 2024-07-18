import { writeFileSync } from "fs";
import { ThemeContext, Variant } from "../@types/index";
import { getThemePaths } from "../extension/helpers";
import { defaultConfig } from "../modern/index";
import { getStyles } from "../modern/variants/index";
import { getThemeObject } from "../theme/index";

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
