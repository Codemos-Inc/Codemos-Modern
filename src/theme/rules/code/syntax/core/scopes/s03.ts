import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s03;
  const decorations = themeContext.textDecorations;
  return [
    // Interfaces
    {
      scope: [
        "entity.name.interface",
        "entity.name.type.interface",
        "entity.other.attribute-name.interface",
        "support.interface",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Classes
    {
      scope: [
        "entity.name.class",
        "entity.name.type.class",
        "entity.other.attribute-name.class",
        "support.class",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Inherited classes
    {
      scope: ["entity.other.inherited-class"],
      settings: {
        foreground: color,
        fontStyle: decorations.bold ? "bold" : "",
      },
    },
    // Structs
    {
      scope: [
        "entity.name.struct",
        "entity.name.type.struct",
        "entity.other.attribute-name.struct",
        "support.struct",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Inherited structs
    {
      scope: ["entity.other.inherited-struct"],
      settings: {
        foreground: color,
        fontStyle: decorations.bold ? "bold" : "",
      },
    },
    // Enums
    {
      scope: [
        "entity.name.enum",
        "entity.name.type.enum",
        "entity.other.attribute-name.enum",
        "support.enum",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Inherited enums
    {
      scope: ["entity.other.inherited-enum"],
      settings: {
        foreground: color,
        fontStyle: decorations.bold ? "bold" : "",
      },
    },
    // Types
    {
      scope: ["entity.name.type", "entity.other.attribute-name.type", "support.type"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Language variables
    {
      scope: ["support.language.variable", "variable.language", "variable.other.language"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
