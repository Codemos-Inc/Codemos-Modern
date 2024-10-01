import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s01;
  return {
    // Decorators
    decorator: color,
  };
};
