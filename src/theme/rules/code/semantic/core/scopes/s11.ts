import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s11;
  const decorations = themeContext.textDecorations;
  return {
    // Properties
    property: {
      foreground: color,
      underline: decorations.underline,
    },
  };
};
