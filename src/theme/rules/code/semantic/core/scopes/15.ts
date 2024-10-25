import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scope15;
  return {
    // Regular expressions
    regexp: color,
  };
};
