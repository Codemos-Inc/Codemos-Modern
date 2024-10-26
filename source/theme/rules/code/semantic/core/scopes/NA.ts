import type { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const decorations = themeContext.textDecorations;
  return {
    // Read-only symbols
    "*.readonly": { underline: false },
    // Static symbols
    "*.static": { italic: decorations.italic },
    // Deprecated symbols
    "*.deprecated": {
      strikethrough: decorations.strikeThrough,
    },
    // Abstract symbols
    "*.abstract": { bold: decorations.bold },
  };
};
