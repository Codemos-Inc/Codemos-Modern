import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Types
    {
      scope: ["meta.embedded.block.groovy storage.type", "source.groovy storage.type"],
      settings: {
        foreground: colors.scope03,
        fontStyle: "",
      },
    },
    // Keyword fixes
    {
      scope: [
        "meta.embedded.block.groovy keyword.operator.in",
        "meta.embedded.block.groovy storage.type.def",
        "source.groovy keyword.operator.in",
        "source.groovy storage.type.def",
      ],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
    // Enum members
    {
      scope: ["meta.embedded.block.groovy constant.enum.name", "source.groovy constant.enum.name"],
      settings: {
        foreground: colors.scope13,
        fontStyle: "",
      },
    },
    // Variables
    {
      scope: [
        "meta.embedded.block.groovy constant.other.key",
        "meta.embedded.block.groovy constant.variable",
        "meta.embedded.block.groovy meta.definition.variable.name",
        "source.groovy constant.other.key",
        "source.groovy constant.variable",
        "source.groovy meta.definition.variable.name",
      ],
      settings: {
        foreground: colors.scope10,
        fontStyle: "",
      },
    },
    // Interpolated strings
    {
      scope: [
        "meta.embedded.block.groovy variable.other.interpolated",
        "source.groovy variable.other.interpolated",
      ],
      settings: {
        foreground: colors.scope14,
        fontStyle: "",
      },
    },
    // Method calls
    {
      scope: ["meta.embedded.block.groovy meta.method-call", "source.groovy meta.method-call"],
      settings: {
        foreground: colors.scope02,
        fontStyle: "",
      },
    },
    // Method braces
    {
      scope: [
        "meta.embedded.block.groovy punctuation.definition.method-parameters.begin",
        "meta.embedded.block.groovy punctuation.definition.method-parameters.end",
        "source.groovy punctuation.definition.method-parameters.begin",
        "source.groovy punctuation.definition.method-parameters.end",
      ],
      settings: {
        foreground: colors.scopeXX,
        fontStyle: "",
      },
    },
    // Annotation variables
    {
      scope: [
        "meta.embedded.block.groovy meta.declaration.annotation constant.other.key",
        "source.groovy meta.declaration.annotation constant.other.key",
      ],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
  ];
};
