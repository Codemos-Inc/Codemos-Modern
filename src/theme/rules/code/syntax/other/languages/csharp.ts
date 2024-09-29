import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Preprocessor directives
    {
      scope: ["meta.preprocessor punctuation.separator.hash"],
      settings: {
        foreground: colors.s16,
      },
    },
  ];
};
