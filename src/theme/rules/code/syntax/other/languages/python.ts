import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Magic functions
    {
      scope: ["support.function.magic", "support.variable.magic"],
      settings: {
        foreground: colors.s07,
      },
    },
    // Member access
    {
      scope: ["source.python meta.attribute"],
      settings: {
        foreground: colors.s11,
      },
    },
    // Function calls
    {
      scope: ["source.python meta.function-call"],
      settings: {
        foreground: colors.s02,
      },
    },
    // Function paranthesis
    {
      scope: ["source.python punctuation.definition.arguments"],
      settings: {
        foreground: colors.sxx,
      },
    },
    // String literal prefix
    {
      scope: ["source.python storage.type.string"],
      settings: {
        foreground: colors.s00,
      },
    },
    // Logical operators
    {
      scope: ["source.python keyword.operator.logical"],
      settings: {
        foreground: colors.s06,
      },
    },
    // Fstrings
    {
      scope: ["source.python meta.fstring"],
      settings: {
        foreground: colors.s00,
      },
    },
    // Format function
    {
      scope: ["source.python storage.type.format"],
      settings: {
        foreground: colors.s02,
      },
    },
    // Type hints
    {
      scope: ["source.python meta.typehint.comment"],
      settings: {
        foreground: colors.s07,
      },
    },
    // Type hint directives
    {
      scope: [
        "source.python comment.typehint.directive",
        "source.python comment.typehint.punctuation",
      ],
      settings: {
        foreground: colors.s15,
      },
    },
  ];
};
