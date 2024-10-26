import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope16;
  return {
    // Labels
    label: color,
  };
};
