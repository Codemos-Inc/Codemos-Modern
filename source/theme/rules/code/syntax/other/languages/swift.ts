import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Attributes
    {
      scope: ["meta.attribute punctuation.definition.arguments", "storage.modifier.attribute"],
      settings: {
        foreground: colors.scope01,
        fontStyle: "",
      },
    },
    // Attribute arguments
    {
      scope: ["meta.arguments.attribute"],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
  ];
};
