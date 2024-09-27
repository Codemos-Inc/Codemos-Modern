import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s06;
  return [
    // Keywords
    {
      scope: [
        "constant.language",
        "keyword.operator.comparison",
        "keyword.operator.logical",
        "keyword",
        "punctuation.definition.keyword",
        "storage",
        "support.constant",
        "support.keyword",
        "support.punctuation.definition.keyword",
        "support.storage",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Primitive types
    {
      scope: [
        "constant.language.primitive-type",
        "entity.name.type.primitive",
        "keyword.other.primitive-type",
        "keyword.type",
        "storage.type.built-in",
        "storage.type.builtin",
        "storage.type.primitive",
        "support.type.built-in",
        "support.type.builtin",
        "support.type.primitive",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
