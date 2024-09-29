import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Interpolated strings
    {
      scope: [
        "source.kotlin entity.string.template.element",
        "source.kotlin entity.string.template.element punctuation.definition.keyword",
      ],
      settings: {
        foreground: colors.s14,
        fontStyle: "",
      },
    },
    // Wordlike keywords
    {
      scope: ["source.kotlin keyword.operator"],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
    // Other keywords
    {
      scope: [
        "source.kotlin keyword.operator.arithmetic",
        "source.kotlin keyword.operator.assignment",
        "source.kotlin keyword.operator.comparison",
        "source.kotlin keyword.operator.declaration",
        "source.kotlin keyword.operator.elvis",
        "source.kotlin keyword.operator.logical",
      ],
      settings: {
        foreground: colors.sxx,
        fontStyle: "",
      },
    },
  ];
};
