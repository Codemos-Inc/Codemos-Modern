import { ThemeContext } from "../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  return [...(<[]>getDefaultRules(themeContext)), ...(<[]>getExtraRules(themeContext))];
};

const getDefaultRules = (themeContext: ThemeContext): object => {
};

const getExtraRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return [
    // other keyword
    {
      scope: [
        "entity.other.keyframe-offset",
        "entity.name.tag.reference",
        "meta.at-rule.keyframes",
        "entity.other.attribute-name.scss",
        "source.css.less constant.numeric",
        "source.css.less keyword.other.unit",
      ],
      settings: {
        foreground: colors.basic.alt.pink.pri,
        fontStyle: "",
      },
    },
    // markdown
    {
      scope: ["heading.1", "markup.heading.setext.1"],
      settings: {
        foreground: colors.basic.def.red.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["heading.2", "markup.heading.setext.2"],
      settings: {
        foreground: colors.basic.def.orange.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["heading.3", "markup.heading.setext.3"],
      settings: {
        foreground: colors.basic.def.yellow.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["heading.4", "markup.heading.setext.4"],
      settings: {
        foreground: colors.basic.def.green.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["heading.5", "markup.heading.setext.5"],
      settings: {
        foreground: colors.basic.def.mint.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["heading.6", "markup.heading.setext.6"],
      settings: {
        foreground: colors.basic.def.blue.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["emphasis", "markup.italic"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: ["strong", "markup.bold"],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: ["deleted", "markup.strikethrough"],
      settings: {
        fontStyle: "strikethrough",
      },
    },
    {
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      scope: ["markup.underline.link"],
      settings: {
        foreground: colors.basic.alt.blue.pri,
        fontStyle: "underline",
      },
    },
    {
      scope: ["string.other.link", "punctuation.definition.list.begin.markdown"],
      settings: {
        foreground: colors.fill.accentText.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["markup.fenced_code.block", "markup.inline.raw", "markup.raw.block"],
      settings: {
        foreground: colors.basic.def.pink.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["punctuation.definition.quote.begin"],
      settings: {
        foreground: colors.basic.def.purple.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["punctuation.definition.tag"],
      settings: {
        foreground: colors.fill.text.sec,
        fontStyle: "",
      },
    },
    {
      scope: ["meta.separator"],
      settings: {
        foreground: colors.basic.def.brown.pri,
        fontStyle: "",
      },
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: colors.basic.def.green.pri,
      },
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: colors.basic.def.red.pri,
      },
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: colors.basic.def.blue.pri,
      },
    },
    // magicFunction
    {
      scope: "support.function.magic.python",
      settings: {
        foreground: colors.basic.def.purple.pri,
      },
    },
  ];
};
