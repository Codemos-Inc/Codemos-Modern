import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s01;
  const decorations = themeContext.textDecorations;
  return [
    // Annotations
    {
      scope: [
        "constant.other.annotation",
        "entity.name.annotation",
        "entity.name.function.annotation",
        "entity.other.annotation",
        "meta.annotation.identifier",
        "meta.annotation",
        "meta.function.annotation",
        "punctuation.annotation",
        "punctuation.definition.annotation",
        "storage.type.annotation",
        "support.annotation",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Attributes
    {
      scope: [
        "constant.other.attribute",
        "entity.name.attribute",
        "entity.name.function.attribute",
        "entity.other.attribute",
        "meta.attribute.identifier",
        "meta.attribute",
        "meta.function.attribute",
        "punctuation.attribute",
        "punctuation.definition.attribute",
        "storage.type.attribute",
        "support.attribute",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Decorators
    {
      scope: [
        "constant.other.decorator",
        "entity.name.decorator",
        "entity.name.function.decorator",
        "entity.other.decorator",
        "meta.decorator.identifier",
        "meta.decorator",
        "meta.function.decorator",
        "punctuation.decorator",
        "punctuation.definition.decorator",
        "storage.type.decorator",
        "support.decorator",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Escape sequences
    {
      scope: ["constants.character.escape"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Invalid
    {
      scope: ["invalid", "support.invalid"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Deprecated
    {
      scope: ["invalid.deprecated", "support.invalid.deprecated"],
      settings: {
        foreground: color,
        fontStyle: decorations.strikeThrough ? "strikethrough" : "",
      },
    },
  ];
};
