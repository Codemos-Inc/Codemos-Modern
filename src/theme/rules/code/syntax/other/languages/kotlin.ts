import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Interpolated strings
    {
      scope: [
        "meta.embedded.block.kotlin entity.string.template.element punctuation.definition.keyword",
        "meta.embedded.block.kotlin entity.string.template.element",
        "source.kotlin entity.string.template.element punctuation.definition.keyword",
        "source.kotlin entity.string.template.element",
      ],
      settings: {
        foreground: colors.scope14,
        fontStyle: "",
      },
    },
    // Wordlike keywords
    {
      scope: ["meta.embedded.block.kotlin keyword.operator", "source.kotlin keyword.operator"],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
    // Other keywords
    {
      scope: [
        "meta.embedded.block.kotlin keyword.operator.arithmetic",
        "meta.embedded.block.kotlin keyword.operator.assignment",
        "meta.embedded.block.kotlin keyword.operator.comparison",
        "meta.embedded.block.kotlin keyword.operator.declaration",
        "meta.embedded.block.kotlin keyword.operator.elvis",
        "meta.embedded.block.kotlin keyword.operator.logical",
        "source.kotlin keyword.operator.arithmetic",
        "source.kotlin keyword.operator.assignment",
        "source.kotlin keyword.operator.comparison",
        "source.kotlin keyword.operator.declaration",
        "source.kotlin keyword.operator.elvis",
        "source.kotlin keyword.operator.logical",
      ],
      settings: {
        foreground: colors.scopeXX,
        fontStyle: "",
      },
    },
  ];
};
