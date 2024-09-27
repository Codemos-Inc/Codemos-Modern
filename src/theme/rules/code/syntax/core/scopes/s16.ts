import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s16;
  return [
    // Preprocessor directives
    {
      scope: [
        "keyword.control.directive",
        "keyword.other.directive",
        "keyword.other.preprocessor",
        "keyword.preprocessor",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Labels
    {
      scope: ["entity.name.label"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Regular expressions | Character classes
    {
      scope: [
        "constant.character.character-class.regexp",
        "constant.character.set.regexp",
        "constant.other.character-class.regexp",
        "constant.other.character-class.set.regexp",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
