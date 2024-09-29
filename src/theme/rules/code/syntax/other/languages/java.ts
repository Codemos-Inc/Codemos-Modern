import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Types
    {
      scope: ["source.java storage.type"],
      settings: {
        foreground: colors.s03,
      },
    },
    // Storage keywords
    {
      scope: ["source.java storage.type.local"],
      settings: {
        foreground: colors.s06,
      },
    },
    // Operators
    {
      scope: ["source.java keyword.control.ternary", "source.java variable.language.wildcard"],
      settings: {
        foreground: colors.sxx,
      },
    },
  ];
};
