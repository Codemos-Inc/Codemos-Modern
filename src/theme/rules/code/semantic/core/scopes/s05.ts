import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s05;
  return {
    // Namespaces
    namespace: color,
  };
};
