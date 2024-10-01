import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s08;
  return {
    // Control keywords
    "keyword.control": color,
  };
};
