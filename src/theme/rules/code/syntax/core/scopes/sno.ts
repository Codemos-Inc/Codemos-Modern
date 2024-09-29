import type { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const decorations = themeContext.textDecorations;
  return [
    // Emphasis
    {
      scope: ["emphasis"],
      settings: {
        fontStyle: "italic",
      },
    },
    // Strong
    {
      scope: ["strong"],
      settings: {
        fontStyle: "bold",
      },
    },
    // Deleted
    {
      scope: ["deleted"],
      settings: {
        fontStyle: "strikethrough",
      },
    },
    // Invalid
    {
      scope: ["invalid", "support.invalid"],
      settings: {
        foreground: styles.basic.def.red.pri,
        fontStyle: "",
      },
    },
    // Deprecated
    {
      scope: ["invalid.deprecated", "support.invalid.deprecated"],
      settings: {
        foreground: styles.basic.def.red.pri,
        fontStyle: decorations.strikeThrough ? "strikethrough" : "",
      },
    },
  ];
};
