import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Preprocessor fixes
    {
      scope: ["entity.other.attribute-name.pragma"],
      settings: {
        foreground: colors.s16,
        fontStyle: "",
      },
    },
    // Various operators
    {
      scope: ["punctuation.definition.function.return-type", "storage.modifier.reference"],
      settings: {
        foreground: colors.sxx,
        fontStyle: "",
      },
    },
    // New/Delete operators
    {
      scope: ["source.cpp keyword.operator.delete", "source.cpp keyword.operator.new"],
      settings: {
        foreground: colors.s01,
        fontStyle: "",
      },
    },
    // Operator keyword
    {
      scope: ["keyword.other.operator.overload"],
      settings: {
        foreground: colors.s02,
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
        "source.cpp keyword.operator.functionlike",
        "source.cpp keyword.operator.wordlike",
      ],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
  ];
};
