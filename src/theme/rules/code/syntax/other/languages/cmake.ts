import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Preprocessor fixes
    {
      scope: ["source.cmake command-identifier"],
      settings: {
        foreground: colors.scope07,
        fontStyle: "",
      },
    },
    // Parentheses
    {
      scope: ["source.cmake punctuation.parenthesis", "source.cmake punctuation.section.parens"],
      settings: {
        foreground: colors.scopeXX,
      },
    },
    // Expression groups
    {
      scope: ["source.cmake expression.group"],
      settings: {
        foreground: colors.scope09,
      },
    },
    // All other tokens
    {
      scope: ["source.cmake"],
      settings: {
        foreground: colors.scope01,
      },
    },
  ];
};
