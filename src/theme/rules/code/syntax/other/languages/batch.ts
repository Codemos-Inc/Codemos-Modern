import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Commands
    {
      scope: ["source.batchfile keyword.command"],
      settings: {
        foreground: colors.s03,
        fontStyle: "",
      },
    },
    // Logical/Comparison operators
    {
      scope: [
        "source.batchfile keyword.operator.comparison",
        "source.batchfile keyword.operator.logical",
      ],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
    // Remarks
    {
      scope: ["source.batchfile keyword.command.rem"],
      settings: {
        foreground: colors.s07,
        fontStyle: "",
      },
    },
    // Other operators
    {
      scope: ["source.batchfile keyword.operator.at"],
      settings: {
        foreground: colors.s16,
        fontStyle: "",
      },
    },
  ];
};
