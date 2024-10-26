import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope02;
  const decorations = themeContext.textDecorations;
  return [
    // Functions
    {
      scope: [
        "constant.other.function",
        "entity.name.function-call",
        "entity.name.function",
        "entity.name.operator.custom-literal",
        "entity.other.attribute-name.parent-selector",
        "entity.other.function-call",
        "entity.other.function",
        "punctuation.definition.function",
        "punctuation.function",
        "support.function",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Static functions
    {
      scope: [
        "entity.name.function.static",
        "entity.name.function.static-call",
        "entity.other.function.static",
        "punctuation.definition.function.static",
        "punctuation.function.static",
        "support.function.static",
      ],
      settings: {
        foreground: color,
        fontStyle: decorations.italic ? "italic" : "",
      },
    },
    // Methods
    {
      scope: [
        "entity.name.function.member",
        "entity.name.method-call",
        "entity.name.method",
        "entity.other.method-call",
        "entity.other.method",
        "punctuation.definition.method",
        "punctuation.method",
        "support.method",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Static methods
    {
      scope: [
        "entity.name.method.static",
        "entity.name.method.static-call",
        "entity.other.method.static",
        "punctuation.definition.method.static",
        "punctuation.method.static",
        "support.method.static",
      ],
      settings: {
        foreground: color,
        fontStyle: decorations.italic ? "italic" : "",
      },
    },
  ];
};
