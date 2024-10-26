import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Preprocessor fixes
    {
      scope: ["entity.other.attribute-name.pragma"],
      settings: {
        foreground: colors.scope16,
        fontStyle: "",
      },
    },
    // Various operators
    {
      scope: ["punctuation.definition.function.return-type", "storage.modifier.reference"],
      settings: {
        foreground: colors.scope17,
        fontStyle: "",
      },
    },
    // New/Delete operators
    {
      scope: [
        "meta.embedded.block.cpp keyword.operator.delete",
        "meta.embedded.block.cpp keyword.operator.new",
        "source.cpp keyword.operator.delete",
        "source.cpp keyword.operator.new",
      ],
      settings: {
        foreground: colors.scope01,
        fontStyle: "",
      },
    },
    // Operator keyword
    {
      scope: ["keyword.other.operator.overload"],
      settings: {
        foreground: colors.scope02,
        fontStyle: "",
      },
    },
    // Wordlike/Functionlike keywords
    {
      scope: [
        "keyword.operator.alignas",
        "keyword.operator.alignof",
        "keyword.operator.and_eq",
        "keyword.operator.and",
        "keyword.operator.bitand",
        "keyword.operator.bitor",
        "keyword.operator.cast",
        "keyword.operator.compl",
        "keyword.operator.const",
        "keyword.operator.noexcept",
        "keyword.operator.not_eq",
        "keyword.operator.not",
        "keyword.operator.or_eq",
        "keyword.operator.or",
        "keyword.operator.sizeof",
        "keyword.operator.typeid",
        "keyword.operator.xor_eq",
        "keyword.operator.xor",
        "keyword.other.static_assert",
        "meta.embedded.block.cpp keyword.operator.functionlike",
        "meta.embedded.block.cpp keyword.operator.wordlike",
        "source.cpp keyword.operator.functionlike",
        "source.cpp keyword.operator.wordlike",
      ],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
  ];
};
