import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Number suffixes
    {
      scope: ["source.matlab storage.type.number.imaginary"],
      settings: {
        foreground: colors.scope12,
        fontStyle: "",
      },
    },
  ];
};
