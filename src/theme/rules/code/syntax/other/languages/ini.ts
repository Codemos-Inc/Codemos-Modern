import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Attributes
    {
      scope: ["source.ini keyword.other.definition"],
      settings: {
        foreground: colors.s05,
        fontStyle: "",
      },
    },
    // Section titles
    {
      scope: ["source.ini entity.name.section.group-title"],
      settings: {
        foreground: colors.s09,
        fontStyle: "",
      },
    },
    // Section punctuations
    {
      scope: ["source.ini punctuation.definition.entity"],
      settings: {
        foreground: colors.s01,
        fontStyle: "",
      },
    },
  ];
};
