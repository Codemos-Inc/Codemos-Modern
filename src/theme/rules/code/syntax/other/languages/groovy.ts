import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Types
    {
      scope: ["source.groovy storage.type"],
      settings: {
        foreground: colors.s03,
        fontStyle: "",
      },
    },
    // Keyword fixes
    {
      scope: ["source.groovy keyword.operator.in", "source.groovy storage.type.def"],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
    // Enum members
    {
      scope: ["source.groovy constant.enum.name"],
      settings: {
        foreground: colors.s13,
        fontStyle: "",
      },
    },
    // Variables
    {
      scope: [
        "source.groovy constant.other.key",
        "source.groovy constant.variable",
        "source.groovy meta.definition.variable.name",
      ],
      settings: {
        foreground: colors.s10,
        fontStyle: "",
      },
    },
    // Interpolated strings
    {
      scope: ["source.groovy variable.other.interpolated"],
      settings: {
        foreground: colors.s14,
        fontStyle: "",
      },
    },
    // Method calls
    {
      scope: ["source.groovy meta.method-call"],
      settings: {
        foreground: colors.s02,
        fontStyle: "",
      },
    },
    // Method braces
    {
      scope: [
        "source.groovy punctuation.definition.method-parameters.begin",
        "source.groovy punctuation.definition.method-parameters.end",
      ],
      settings: {
        foreground: colors.sxx,
        fontStyle: "",
      },
    },
    // Annotation variables
    {
      scope: ["source.groovy meta.declaration.annotation constant.other.key"],
      settings: {
        foreground: colors.s09,
        fontStyle: "",
      },
    },
  ];
};
