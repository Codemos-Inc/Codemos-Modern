import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Commands
    {
      scope: ["entity.name.command", "source.shell support.function"],
      settings: {
        foreground: colors.s03,
      },
    },
    // Options
    {
      scope: ["source.shell constant.other.option"],
      settings: {
        foreground: colors.s11,
      },
    },
    // Operators
    {
      scope: [
        "source.shell keyword.operator.comparison",
        "source.shell keyword.operator.logical",
        "source.shell keyword.operator.redirect",
      ],
      settings: {
        foreground: colors.s06,
      },
    },
    // Pipe operator
    {
      scope: ["source.shell keyword.operator.pipe"],
      settings: {
        foreground: colors.s16,
      },
    },
    // Herestring operator
    {
      scope: ["source.shell keyword.operator.herestring"],
      settings: {
        foreground: colors.s09,
      },
    },
    // Case entries
    {
      scope: [
        "source.shell keyword.operator.pattern.case",
        "source.shell meta.case.entry constant.character.escape",
        "source.shell meta.case.entry constant.character",
        "source.shell meta.case.entry string.regexp",
      ],
      settings: {
        foreground: colors.s16,
      },
    },
    // Interpolated strings
    {
      scope: [
        "source.shell punctuation.definition.variable",
        "source.shell punctuation.definition.subshell",
      ],
      settings: {
        foreground: colors.s14,
      },
    },
    // Language variables
    {
      scope: ["source.shell variable.language"],
      settings: {
        foreground: colors.s13,
      },
    },
  ];
};
