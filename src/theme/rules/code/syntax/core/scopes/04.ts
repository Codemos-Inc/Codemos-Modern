import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scope04;
  const decorations = themeContext.textDecorations;
  return [
    // Comments
    {
      scope: ["comment", "support.comment"],
      settings: {
        foreground: color,
        fontStyle: `${decorations.forComments.join(" ").toLowerCase()}`,
      },
    },
    // Comment punctuation
    {
      scope: ["punctuation.definition.comment", "support.punctuation.definition.comment"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
