import { Config, Variant } from "../@types/modern";
import { ThemeContext } from "../@types/theme";
import { toggleFirstLetterCase } from "../extension/helpers";
import { getStyles } from "../modern/variants";
import { getRules } from "./rules";

export const getThemeObject = (variant: Variant, config: Config): object => {
  const themeContext: ThemeContext = {
    variantConfig: config[variant],
    variant: variant,
    styles: getStyles(variant, config),
  };
  return {
    $schema: "vscode://schemas/color-theme",
    name: `Codemos Modern (${toggleFirstLetterCase(variant)})`,
    type: `${variant}`,
    semanticHighlighting: true,
    ...getRules(themeContext),
  };
};
