import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s07;
  return [
    // Macros
    {
      scope: [
        "entity.name.function.preprocessor",
        "entity.name.macro",
        "entity.name.type.macro",
        "entity.other.attribute-name.macro",
        "meta.preprocessor.macro",
        "storage.type.macro",
        "support.macro",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Regular expressions
    {
      scope: [
        "constant.regexp",
        "string.regexp",
        "support.constant.regexp",
        "support.string.regexp",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
