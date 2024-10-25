import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scope05;
  return {
    // Namespaces
    namespace: color,
  };
};
