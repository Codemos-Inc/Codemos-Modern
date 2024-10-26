import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Square brackets
    {
      scope: ["source.coffee meta.arguments"],
      settings: {
        foreground: colors.scope10,
        fontStyle: "",
      },
    },
    // Language variables
    {
      scope: ["source.coffee support.variable"],
      settings: {
        foreground: colors.scope13,
        fontStyle: "",
      },
    },
  ];
};
