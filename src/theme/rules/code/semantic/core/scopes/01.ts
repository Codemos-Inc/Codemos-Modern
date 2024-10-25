import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scope01;
  return {
    // Decorators
    decorator: color,
  };
};
