import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Commands
    {
      scope: ["meta.embedded.block.fish support.function", "source.fish support.function"],
      settings: {
        foreground: colors.scope03,
      },
    },
    // Options
    {
      scope: [
        "meta.embedded.block.fish source.option",
        "meta.embedded.block.fish string.other.option",
        "source.fish source.option",
        "source.fish string.other.option",
      ],
      settings: {
        foreground: colors.scope11,
      },
    },
    // Language variables
    {
      scope: ["meta.embedded.block.fish variable.language", "source.fish variable.language"],
      settings: {
        foreground: colors.scope13,
      },
    },
    // Operators
    {
      scope: [
        "meta.embedded.block.fish keyword.operator.comparison",
        "meta.embedded.block.fish keyword.operator.logical",
        "meta.embedded.block.fish keyword.operator.redirect",
        "source.fish keyword.operator.comparison",
        "source.fish keyword.operator.logical",
        "source.fish keyword.operator.redirect",
      ],
      settings: {
        foreground: colors.scope06,
      },
    },
  ];
};
