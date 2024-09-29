import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Properties
    {
      scope: ["source.toml support.type.property-name"],
      settings: {
        foreground: colors.s05,
        fontStyle: "",
      },
    },
    // Inline tables
    {
      scope: ["source.toml punctuation.definition.table.inline"],
      settings: {
        foreground: colors.sxx,
        fontStyle: "",
      },
    },
    // Arrays
    {
      scope: [
        "source.toml punctuation.definition.array.table",
        "source.toml punctuation.definition.table",
      ],
      settings: {
        foreground: colors.s01,
        fontStyle: "",
      },
    },
    // Array items
    {
      scope: [
        "source.toml meta.table punctuation.separator.dot",
        "source.toml meta.array punctuation.separator.dot",
        "source.toml support.type.property-name.array",
        "source.toml support.type.property-name.table",
      ],
      settings: {
        foreground: colors.s09,
        fontStyle: "",
      },
    },
    // Date
    {
      scope: ["source.toml constant.other.time.date"],
      settings: {
        foreground: colors.s10,
        fontStyle: "",
      },
    },
    // Time
    {
      scope: ["source.toml constant.other.time.time"],
      settings: {
        foreground: colors.s11,
        fontStyle: "",
      },
    },
    // Datetime
    {
      scope: ["source.toml constant.other.time.datetime"],
      settings: {
        foreground: colors.s15,
        fontStyle: "",
      },
    },
    // Datetime (offset)
    {
      scope: ["source.toml constant.other.time.datetime.offset"],
      settings: {
        foreground: colors.s16,
        fontStyle: "",
      },
    },
  ];
};
