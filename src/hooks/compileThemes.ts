import { writeFileSync } from "fs";
import { ThemeContext, Variant } from "../@types";
import { getThemePaths } from "../extension/helpers";
import { defaultConfig } from "../modern";
import { getStyles } from "../modern/variants";
import { getThemeObj } from "../theme";

const themePaths = getThemePaths();
const variants: Variant[] = ["dark", "light"];
variants.map((variant) => {
  const themeContext: ThemeContext = {
    textDecorations: defaultConfig.textDecorations,
    variant: variant,
    variantConfig: defaultConfig[variant],
    styles: getStyles(variant, defaultConfig),
    auxUiThemeObj: null,
    auxCodeThemeObj: null,
  };
  writeFileSync(themePaths[variant], JSON.stringify(getThemeObj(themeContext), null, 2));
});
