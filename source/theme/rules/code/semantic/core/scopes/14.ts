import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope14;
  return {
    // Symbols inside documentations
    "*.documentation": color,
  };
};
