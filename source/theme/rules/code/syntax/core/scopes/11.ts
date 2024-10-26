import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope11;
  const decorations = themeContext.textDecorations;
  return [
    // Properties (read/write)
    {
      scope: [
        "entity.name.variable.field",
        "entity.name.variable.property",
        "meta.class variable",
        "meta.interface variable",
        "meta.object-literal.key",
        "meta.object.member",
        "meta.struct variable",
        "support.variable.property",
        "variable.other.member",
        "variable.other.property",
        "variable.other.object.property",
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
        "meta.object-literal.key.constant",
        "meta.object.member.constant",
        "meta.struct variable.other.constant",
        "support.variable.property.constant",
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
