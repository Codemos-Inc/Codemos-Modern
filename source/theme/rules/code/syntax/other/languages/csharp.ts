import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Preprocessor directives
    {
      scope: ["meta.preprocessor punctuation.separator.hash"],
      settings: {
        foreground: colors.scope16,
      },
    },
  ];
};
