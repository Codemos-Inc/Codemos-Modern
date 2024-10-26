import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope12;
  return [
    // Numeric literals
    {
      scope: ["constant.numeric", "meta.preprocessor.numeric"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Units
    {
      scope: ["keyword.other.unit"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Regular expressions | Quantifiers
    {
      scope: ["keyword.operator.quantifier.regexp"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
