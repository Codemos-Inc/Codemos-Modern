import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Entry properties
    {
      scope: [
        "meta.embedded.block.bibtex support.function.key",
        "text.bibtex support.function.key",
      ],
      settings: {
        foreground: colors.scope14,
        fontStyle: "",
      },
    },
    // Entry names
    {
      scope: [
        "meta.embedded.block.bibtex entity.name.type.entry-key",
        "text.bibtex entity.name.type.entry-key",
      ],
      settings: {
        foreground: colors.scope10,
        fontStyle: "",
      },
    },
    // Square brackets
    {
      scope: ["meta.embedded.block.bibtex support.variable", "text.bibtex support.variable"],
      settings: {
        foreground: colors.scope13,
        fontStyle: "",
      },
    },
    // Strings
    {
      scope: [
        "meta.embedded.block.bibtex meta.key-assignment",
        "meta.embedded.block.bibtex meta.preamble.braces",
        "meta.embedded.block.bibtex meta.string-constant",
        "text.bibtex meta.key-assignment",
        "text.bibtex meta.preamble.braces",
        "text.bibtex meta.string-constant",
      ],
      settings: {
        foreground: colors.scope00,
        fontStyle: "",
      },
    },
  ];
};
