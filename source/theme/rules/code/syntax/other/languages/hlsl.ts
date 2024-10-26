import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Square brackets
    {
      scope: ["source.hlsl support.variable"],
      settings: {
        foreground: colors.scope13,
        fontStyle: "",
      },
    },
  ];
};
