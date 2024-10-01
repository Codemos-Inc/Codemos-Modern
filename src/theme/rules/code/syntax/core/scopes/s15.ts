import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s15;
  return [
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
    // Special characters
    {
      scope: ["constant.character", "constant.other.unicode-range"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
