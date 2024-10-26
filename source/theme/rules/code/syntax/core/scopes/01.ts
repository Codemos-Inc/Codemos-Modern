import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope01;
  return [
    // Annotations
    {
      scope: [
        "constant.other.annotation",
        "entity.name.annotation",
        "entity.name.function.annotation",
        "entity.other.annotation",
        "meta.annotation entity.name.function",
        "meta.annotation punctuation.brackets",
        "meta.annotation.identifier",
        "meta.annotation",
        "meta.function.annotation",
        "punctuation.annotation",
        "punctuation.definition.annotation-arguments",
        "punctuation.definition.annotation",
        "punctuation.section.annotation",
        "storage.type.annotation",
        "support.annotation",
        "support.other.annotation",
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
        "meta.attribute entity.name.function",
        "meta.attribute punctuation.brackets",
        "meta.attribute.identifier",
        "meta.attribute",
        "meta.function.attribute",
        "punctuation.attribute",
        "punctuation.definition.attribute",
        "punctuation.section.attribute",
        "storage.type.attribute",
        "support.attribute",
        "support.other.attribute",
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
        "meta.decorator entity.name.function",
        "meta.decorator punctuation.brackets",
        "meta.decorator.identifier",
        "meta.decorator",
        "meta.function.decorator",
        "punctuation.decorator",
        "punctuation.definition.decorator",
        "punctuation.section.decorator",
        "storage.type.decorator",
        "support.decorator",
        "support.other.decorator",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Escape sequences
    {
      scope: ["constant.character.escape"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
