import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope08;
  return {
    // Control keywords
    "keyword.control": color,
  };
};
