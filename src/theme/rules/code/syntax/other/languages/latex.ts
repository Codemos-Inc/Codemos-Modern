import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Control operators
    {
      scope: [
        "meta.embedded.block.latex keyword.control.preamble punctuation.definition.function",
        "meta.embedded.block.latex punctuation.definition.keyword",
        "text.tex keyword.control.preamble punctuation.definition.function",
        "text.tex punctuation.definition.keyword",
      ],
      settings: {
        foreground: colors.s08,
        fontStyle: "",
      },
    },
    // Function/Item operators
    {
      scope: [
        "meta.embedded.block.latex keyword.other.item punctuation.definition.keyword",
        "meta.embedded.block.latex storage.type.function punctuation.definition.function",
        "text.tex keyword.other.item punctuation.definition.keyword",
        "text.tex storage.type.function punctuation.definition.function",
      ],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
  ];
};
