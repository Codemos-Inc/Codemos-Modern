import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scopeXX;
  return {
    // Operators
    operator: color,
  };
};
