import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope16;
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
    // Regular expressions | Groups
    {
      scope: [
        "punctuation.character.set.begin.regexp",
        "punctuation.character.set.end.regexp",
        "punctuation.definition.character-class.regexp",
        "punctuation.definition.group.assertion.regexp",
        "punctuation.definition.group.regexp",
        "support.other.parenthesis.regexp",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
