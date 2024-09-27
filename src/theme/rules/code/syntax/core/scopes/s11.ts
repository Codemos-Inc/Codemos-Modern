import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s11;
  const decorations = themeContext.textDecorations;
  return [
    // Properties (read/write)
    {
      scope: [
        "entity.name.variable.field",
        "entity.name.variable.property",
        "meta.class variable",
        "meta.interface variable",
        "meta.struct variable",
        "variable.other.member",
        "variable.other.property",
      ],
      settings: {
        foreground: color,
        fontStyle: `${decorations.underline ? "underline" : ""}`,
      },
    },
    // Properties (read-only)
    {
      scope: [
        "entity.name.variable.field.constant",
        "entity.name.variable.property.constant",
        "meta.class variable.other.constant",
        "meta.interface variable.other.constant",
        "meta.struct variable.other.constant",
        "variable.other.constant.member",
        "variable.other.constant.property",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Properties static
    {
      scope: [
        "entity.name.variable.field.static",
        "entity.name.variable.property.static",
        "variable.other.static.member",
        "variable.other.static.property",
      ],
      settings: {
        foreground: color,
        fontStyle: decorations.italic ? "italic" : "",
      },
    },
  ];
};
