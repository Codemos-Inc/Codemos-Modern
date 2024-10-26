import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
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
        foreground: colors.scope08,
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
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
  ];
};
