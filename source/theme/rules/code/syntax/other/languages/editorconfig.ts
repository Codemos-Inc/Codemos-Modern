import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Keys
    {
      scope: ["source.editorconfig keyword.other.definition"],
      settings: {
        foreground: colors.scope05,
        fontStyle: "",
      },
    },
    // Section headers
    {
      scope: ["source.editorconfig meta.section.header"],
      settings: {
        foreground: colors.scope01,
        fontStyle: "",
      },
    },
    // Section operators
    {
      scope: ["source.editorconfig meta.section.header keyword.operator"],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
  ];
};
