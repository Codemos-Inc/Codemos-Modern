import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s06;
  return {
    // Keywords
    keyword: color,
  };
};
