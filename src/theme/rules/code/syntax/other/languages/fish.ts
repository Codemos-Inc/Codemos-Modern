import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Commands
    {
      scope: ["source.fish support.function"],
      settings: {
        foreground: colors.s03,
      },
    },
    // Options
    {
      scope: ["source.fish source.option", "source.fish string.other.option"],
      settings: {
        foreground: colors.s11,
      },
    },
    // Language variables
    {
      scope: ["source.fish variable.language"],
      settings: {
        foreground: colors.s13,
      },
    },
    // Operators
    {
      scope: [
        "source.fish keyword.operator.comparison",
        "source.fish keyword.operator.logical",
        "source.fish keyword.operator.redirect",
      ],
      settings: {
        foreground: colors.s06,
      },
    },
  ];
};
