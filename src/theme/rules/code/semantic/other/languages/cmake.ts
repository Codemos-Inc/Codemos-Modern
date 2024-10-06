import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return {
    // Cmake language helper keywords
    "enum:cmake": colors.s11,
  };
};
