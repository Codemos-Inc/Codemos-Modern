import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // String placeholders
    {
      scope: ["constant.other.placeholder"],
      settings: {
        foreground: colors.scope14,
        fontStyle: "",
      },
    },
  ];
};
