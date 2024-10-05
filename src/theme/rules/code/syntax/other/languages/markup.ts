import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const colors = themeContext.styles.code;
  return [
    // Heading 1
    {
      scope: ["heading.1", "markup.heading.setext.1"],
      settings: {
        foreground: colors.s01,
        fontStyle: "bold",
      },
    },
    // Heading 2
    {
      scope: ["heading.2", "markup.heading.setext.2"],
      settings: {
        foreground: colors.s02,
        fontStyle: "bold",
      },
    },
    // Heading 3
    {
      scope: ["heading.3", "markup.heading.setext.3"],
      settings: {
        foreground: colors.s03,
        fontStyle: "bold",
      },
    },
    // Heading 4
    {
      scope: ["heading.4", "markup.heading.setext.4"],
      settings: {
        foreground: colors.s04,
        fontStyle: "bold",
      },
    },
    // Heading 5
    {
      scope: ["heading.5", "markup.heading.setext.5"],
      settings: {
        foreground: colors.s05,
        fontStyle: "bold",
      },
    },
    // Heading 6
    {
      scope: ["heading.6", "markup.heading.setext.6"],
      settings: {
        foreground: colors.s06,
        fontStyle: "bold",
      },
    },
    // Italic
    {
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic",
      },
    },
    // Bold
    {
      scope: ["markup.bold"],
      settings: {
        fontStyle: "bold",
      },
    },
    // Strikethrough
    {
      scope: ["markup.strikethrough"],
      settings: {
        fontStyle: "strikethrough",
      },
    },
    // Underline
    {
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
      },
    },
    // Links
    {
      scope: ["markup.underline.link"],
      settings: {
        foreground: colors.s06,
        fontStyle: "underline",
      },
    },
    // Lists
    {
      scope: ["string.other.link", "punctuation.definition.list.begin.markdown"],
      settings: {
        foreground: styles.fill.accentText.pri,
        fontStyle: "",
      },
    },
    // Table borders
    {
      scope: ["punctuation.definition.table"],
      settings: {
        foreground: styles.fill.accentText.pri,
        fontStyle: "",
      },
    },
    // Code & Raw
    {
      scope: ["markup.fenced_code.block", "markup.inline.raw", "markup.raw.block"],
      settings: {
        foreground: styles.basic.def.red.pri,
        fontStyle: "",
      },
    },
    // Quote begin
    {
      scope: ["punctuation.definition.quote.begin"],
      settings: {
        foreground: colors.s07,
        fontStyle: "",
      },
    },
    // Quotes
    {
      scope: ["markup.quote"],
      settings: {
        foreground: colors.s15,
        fontStyle: "",
      },
    },
    // Separator
    {
      scope: ["meta.separator"],
      settings: {
        foreground: colors.s00,
        fontStyle: "",
      },
    },
    // Inserted
    {
      scope: ["markup.inserted"],
      settings: {
        foreground: styles.basic.def.green.pri,
      },
    },
    // Deleted
    {
      scope: ["markup.deleted"],
      settings: {
        foreground: styles.basic.def.red.pri,
      },
    },
    // Changed
    {
      scope: ["markup.changed"],
      settings: {
        foreground: styles.basic.def.blue.pri,
      },
    },
  ];
};
