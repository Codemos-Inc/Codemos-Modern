import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scope13;
  return [
    // Generics
    {
      scope: ["entity.name.type.generic", "storage.type.generic", "support.generic"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Enum members
    {
      scope: [
        "constant.other.enum-member",
        "constant.other.enum",
        "entity.name.variable.enum-member",
        "entity.name.variable.enummember",
        "variable.other.enum-member",
        "variable.other.enummember",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Global variables
    {
      scope: [
        "entity.name.variable.global",
        "support.variable.automatic",
        "variable.language.special.global",
        "variable.other.global",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // User-defined constants
    {
      scope: ["constant.other.caps", "variable.other.constant"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
