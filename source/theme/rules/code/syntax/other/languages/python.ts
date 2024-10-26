import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Magic functions
    {
      scope: ["support.function.magic", "support.variable.magic"],
      settings: {
        foreground: colors.scope07,
      },
    },
    // Member access
    {
      scope: ["meta.embedded.block.python meta.attribute", "source.python meta.attribute"],
      settings: {
        foreground: colors.scope11,
      },
    },
    // Function calls
    {
      scope: ["meta.embedded.block.python meta.function-call", "source.python meta.function-call"],
      settings: {
        foreground: colors.scope02,
      },
    },
    // Function parenthesis
    {
      scope: [
        "meta.embedded.block.python punctuation.definition.arguments",
        "source.python punctuation.definition.arguments",
      ],
      settings: {
        foreground: colors.scope17,
      },
    },
    // String literal prefix
    {
      scope: [
        "meta.embedded.block.python storage.type.string",
        "source.python storage.type.string",
      ],
      settings: {
        foreground: colors.scope00,
      },
    },
    // Logical operators
    {
      scope: [
        "meta.embedded.block.python keyword.operator.logical",
        "source.python keyword.operator.logical",
      ],
      settings: {
        foreground: colors.scope06,
      },
    },
    // Fstrings
    {
      scope: ["meta.embedded.block.python meta.fstring", "source.python meta.fstring"],
      settings: {
        foreground: colors.scope00,
      },
    },
    // Format function
    {
      scope: [
        "meta.embedded.block.python storage.type.format",
        "source.python storage.type.format",
      ],
      settings: {
        foreground: colors.scope02,
      },
    },
    // Type hints
    {
      scope: [
        "meta.embedded.block.python meta.typehint.comment",
        "source.python meta.typehint.comment",
      ],
      settings: {
        foreground: colors.scope07,
      },
    },
    // Type hint directives
    {
      scope: [
        "meta.embedded.block.python comment.typehint.directive",
        "meta.embedded.block.python comment.typehint.punctuation",
        "source.python comment.typehint.directive",
        "source.python comment.typehint.punctuation",
      ],
      settings: {
        foreground: colors.scope15,
      },
    },
  ];
};
