import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Square brackets
    {
      scope: ["source.c storage.modifier.array.bracket"],
      settings: {
        foreground: colors.sxx,
        fontStyle: "",
      },
    },
    // Language keywords
    {
      scope: ["keyword.operator.sizeof"],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
    // New/Delete operators
    {
      scope: ["source.c keyword.operator.delete", "source.c keyword.operator.new"],
      settings: {
        foreground: colors.s01,
        fontStyle: "",
      },
    },
  ];
};
