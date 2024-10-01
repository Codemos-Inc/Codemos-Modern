import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Square brackets
    {
      scope: ["source.coffee meta.arguments"],
      settings: {
        foreground: colors.s10,
        fontStyle: "",
      },
    },
    // Language variables
    {
      scope: ["source.coffee support.variable"],
      settings: {
        foreground: colors.s13,
        fontStyle: "",
      },
    },
  ];
};
