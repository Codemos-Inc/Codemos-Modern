import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Attributes
    {
      scope: ["meta.attribute punctuation.definition.arguments", "storage.modifier.attribute"],
      settings: {
        foreground: colors.s01,
        fontStyle: "",
      },
    },
    // Attribute arguments
    {
      scope: ["meta.arguments.attribute"],
      settings: {
        foreground: colors.s09,
        fontStyle: "",
      },
    },
  ];
};
