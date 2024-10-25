import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Constants
    {
      scope: ["meta.embedded.block.php constant.other", "source.php constant.other"],
      settings: {
        foreground: colors.scope10,
        fontStyle: "",
      },
    },
    // Interpolated strings
    {
      scope: [
        "meta.embedded.block.php string punctuation.definition.variable",
        "source.php string punctuation.definition.variable",
      ],
      settings: {
        foreground: colors.scope14,
        fontStyle: "",
      },
    },
    // Interpolated variables
    {
      scope: [
        "meta.embedded.block.php string variable punctuation.definition.variable",
        "source.php string variable punctuation.definition.variable",
      ],
      settings: {
        foreground: colors.scope10,
        fontStyle: "",
      },
    },
    // Interpolated language variables
    {
      scope: [
        "meta.embedded.block.php string variable.language punctuation.definition.variable",
        "source.php string variable.language punctuation.definition.variable",
      ],
      settings: {
        foreground: colors.scope03,
        fontStyle: "",
      },
    },
    // Heredoc/Nowdoc operator
    {
      scope: [
        "meta.embedded.block.php keyword.operator.heredoc",
        "meta.embedded.block.php keyword.operator.nowdoc",
        "source.php keyword.operator.heredoc",
        "source.php keyword.operator.nowdoc",
      ],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
    // Logical operators
    {
      scope: [
        "meta.embedded.block.php keyword.operator.logical",
        "source.php keyword.operator.logical",
      ],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
    // Other operators
    {
      scope: [
        "meta.embedded.block.php keyword.operator.arithmetic",
        "source.php punctuation.section.array",
      ],
      settings: {
        foreground: colors.scopeXX,
        fontStyle: "",
      },
    },
    // Embedded SQL
    {
      scope: ["source.sql.embedded"],
      settings: {
        foreground: colors.scopeXX,
        fontStyle: "",
      },
    },
  ];
};
