import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scope16;
  return {
    // Labels
    label: color,
  };
};
