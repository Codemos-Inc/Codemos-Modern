import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scope04;
  const decorations = themeContext.textDecorations;
  return {
    // Comments
    comment: {
      foreground: color,
      strikethrough: decorations.forComments.includes("strikeThrough"),
      bold: decorations.forComments.includes("bold"),
      italic: decorations.forComments.includes("italic"),
      underline: decorations.forComments.includes("underline"),
    },
  };
};
