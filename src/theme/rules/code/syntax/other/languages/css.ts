import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Vendor property
    {
      scope: ["support.type.vendored.property-name"],
      settings: {
        foreground: colors.s09,
        fontStyle: "",
      },
    },
    // Important keywords
    {
      scope: ["keyword.other.important"],
      settings: {
        foreground: colors.s01,
        fontStyle: "",
      },
    },
    // Element
    {
      scope: ["entity.other.attribute-name.id"],
      settings: {
        foreground: colors.s07,
        fontStyle: "",
      },
    },
    // Pseudo-element
    {
      scope: ["entity.other.attribute-name.pseudo-element"],
      settings: {
        foreground: colors.s15,
        fontStyle: "",
      },
    },
    // Class
    {
      scope: ["entity.other.attribute-name.class"],
      settings: {
        foreground: colors.s03,
        fontStyle: "",
      },
    },
    // Pseudo-class
    {
      scope: ["entity.other.attribute-name.pseudo-class"],
      settings: {
        foreground: colors.s11,
        fontStyle: "",
      },
    },
    // Keyframe
    {
      scope: ["entity.other.keyframe-offset"],
      settings: {
        foreground: colors.s16,
        fontStyle: "",
      },
    },
    // Keyword punctuation
    {
      scope: [
        "meta.embedded.block.css punctuation.definition.keyword",
        "meta.embedded.block.less punctuation.definition.keyword",
        "meta.embedded.block.scss punctuation.definition.keyword",
        "source.css punctuation.definition.keyword",
        "source.less punctuation.definition.keyword",
        "source.scss punctuation.definition.keyword",
      ],
      settings: {
        foreground: colors.s08,
        fontStyle: "",
      },
    },
    // Less tag references
    {
      scope: ["punctuation.definition.entity"],
      settings: {
        foreground: colors.s05,
        fontStyle: "",
      },
    },
  ];
};
