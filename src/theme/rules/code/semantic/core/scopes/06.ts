import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scope06;
  return {
    // Keywords
    keyword: color,
  };
};
