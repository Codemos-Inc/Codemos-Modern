import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s15;
  return [
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
