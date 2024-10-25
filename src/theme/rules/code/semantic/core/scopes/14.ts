import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scope14;
  return {
    // Symbols inside documentations
    "*.documentation": color,
  };
};
