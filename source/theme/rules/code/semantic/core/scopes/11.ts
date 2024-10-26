import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope11;
  const decorations = themeContext.textDecorations;
  return {
    // Properties
    property: {
      foreground: color,
      underline: decorations.underline,
    },
  };
};
