import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Keywords
    {
      scope: ["keyword.operator.expression"],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
    // Number suffixes
    {
      scope: ["storage.type.numeric.bigint"],
      settings: {
        foreground: colors.scope12,
        fontStyle: "",
      },
    },
  ];
};
