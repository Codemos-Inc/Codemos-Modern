import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s09;
  return [
    // Events
    {
      scope: ["entity.name.event", "keyword.other.event", "variable.other.event"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Annotation parameters
    {
      scope: [
        "entity.other.annotation.parameter",
        "meta.annotation.parameters",
        "variable.annotation",
        "variable.other.annotation.parameter",
        "variable.parameter.annotation",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Attribute parameters
    {
      scope: [
        "entity.other.attribute.parameter",
        "meta.attribute.parameters",
        "variable.attribute",
        "variable.other.attribute.parameter",
        "variable.parameter.attribute",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Decorator parameters
    {
      scope: [
        "entity.other.decorator.parameter",
        "meta.decorator.parameters",
        "variable.decorator",
        "variable.other.decorator.parameter",
        "variable.parameter.decorator",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
