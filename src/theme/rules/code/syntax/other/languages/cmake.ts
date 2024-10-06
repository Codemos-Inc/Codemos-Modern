import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Preprocessor fixes
    {
      scope: ["source.cmake command-identifier"],
      settings: {
        foreground: colors.s07,
        fontStyle: "",
      },
    },
    // Expression groups
    {
      scope: ["source.cmake expression.group"],
      settings: {
        foreground: colors.s09,
      },
    },
    // All other tokens
    {
      scope: ["source.cmake"],
      settings: {
        foreground: colors.s01,
      },
    },
  ];
};
