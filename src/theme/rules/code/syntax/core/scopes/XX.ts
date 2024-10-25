import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scopeXX;
  return [
    // Operators
    {
      scope: [
        "entity.name.operator",
        "keyword.operator",
        "punctuation.brackets",
        "punctuation.separator",
        "storage.type.function.arrow",
        "support.operator",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Tags
    {
      scope: ["punctuation.definition.tag"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
