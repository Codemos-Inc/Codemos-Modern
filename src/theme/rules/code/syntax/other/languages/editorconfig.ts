import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Keys
    {
      scope: ["source.editorconfig keyword.other.definition"],
      settings: {
        foreground: colors.s05,
        fontStyle: "",
      },
    },
    // Section headers
    {
      scope: ["source.editorconfig meta.section.header"],
      settings: {
        foreground: colors.s01,
        fontStyle: "",
      },
    },
    // Section operators
    {
      scope: ["source.editorconfig meta.section.header keyword.operator"],
      settings: {
        foreground: colors.s09,
        fontStyle: "",
      },
    },
  ];
};
