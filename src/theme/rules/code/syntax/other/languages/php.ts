import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Constants
    {
      scope: ["source.php constant.other"],
      settings: {
        foreground: colors.s10,
        fontStyle: "",
      },
    },
    // Interpolated strings
    {
      scope: ["source.php string punctuation.definition.variable"],
      settings: {
        foreground: colors.s14,
        fontStyle: "",
      },
    },
    // Interpolated variables
    {
      scope: ["source.php string variable punctuation.definition.variable"],
      settings: {
        foreground: colors.s10,
        fontStyle: "",
      },
    },
    // Interpolated language variables
    {
      scope: ["source.php string variable.language punctuation.definition.variable"],
      settings: {
        foreground: colors.s03,
        fontStyle: "",
      },
    },
    // Heredoc/Nowdoc operator
    {
      scope: ["source.php keyword.operator.heredoc", "source.php keyword.operator.nowdoc"],
      settings: {
        foreground: colors.s09,
        fontStyle: "",
      },
    },
    // Logical operators
    {
      scope: ["source.php keyword.operator.logical"],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
    // Other operators
    {
      scope: ["source.php punctuation.section.array"],
      settings: {
        foreground: colors.sxx,
        fontStyle: "",
      },
    },
    // Embedded SQL
    {
      scope: ["source.sql.embedded"],
      settings: {
        foreground: colors.sxx,
        fontStyle: "",
      },
    },
  ];
};
