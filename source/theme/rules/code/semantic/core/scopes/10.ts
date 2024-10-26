import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope10;
  const decorations = themeContext.textDecorations;
  return {
    // Parameters
    parameter: color,
    // Variables
    variable: {
      foreground: color,
      underline: decorations.underline,
    },
  };
};
