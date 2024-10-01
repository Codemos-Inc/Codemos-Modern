import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.sxx;
  return {
    // Operators
    operator: color,
  };
};
