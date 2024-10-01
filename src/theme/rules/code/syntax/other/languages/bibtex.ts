import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Entry properties
    {
      scope: ["text.bibtex support.function.key"],
      settings: {
        foreground: colors.s14,
        fontStyle: "",
      },
    },
    // Entry names
    {
      scope: ["text.bibtex entity.name.type.entry-key"],
      settings: {
        foreground: colors.s10,
        fontStyle: "",
      },
    },
    // Square brackets
    {
      scope: ["text.bibtex support.variable"],
      settings: {
        foreground: colors.s13,
        fontStyle: "",
      },
    },
    // Sstrings
    {
      scope: [
        "text.bibtex meta.key-assignment",
        "text.bibtex meta.preamble.braces",
        "text.bibtex meta.string-constant",
      ],
      settings: {
        foreground: colors.s00,
        fontStyle: "",
      },
    },
  ];
};
