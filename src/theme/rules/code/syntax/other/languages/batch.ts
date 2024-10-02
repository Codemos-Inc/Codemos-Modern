import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Commands
    {
      scope: ["meta.embedded.block.batchfile keyword.command", "source.batchfile keyword.command"],
      settings: {
        foreground: colors.s03,
        fontStyle: "",
      },
    },
    // Logical/Comparison operators
    {
      scope: [
        "meta.embedded.block.batchfile keyword.operator.comparison",
        "meta.embedded.block.batchfile keyword.operator.logical",
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
      scope: [
        "meta.embedded.block.batchfile keyword.command.rem",
        "source.batchfile keyword.command.rem",
      ],
      settings: {
        foreground: colors.s07,
        fontStyle: "",
      },
    },
    // Other operators
    {
      scope: [
        "meta.embedded.block.batchfile keyword.operator.at",
        "source.batchfile keyword.operator.at",
      ],
      settings: {
        foreground: colors.s16,
        fontStyle: "",
      },
    },
  ];
};
