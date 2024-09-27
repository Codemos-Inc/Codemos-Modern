import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s14;
  return [
    // String templates
    {
      scope: [
        "meta.template.expression",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
        "string.interpolated",
        "string.template",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Special characters
    {
      scope: ["constant.character", "constant.other.unicode-range"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Attribute/Property names
    {
      scope: [
        "entity.other.attribute-name",
        "support.type.property-name",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Regular expressions | Operators
    {
      scope: [
        "keyword.control.anchor.regexp",
        "keyword.operator.negation.regexp",
        "keyword.operator.or.regexp",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
