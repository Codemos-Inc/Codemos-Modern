import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Vendor property
    {
      scope: ["support.type.vendored.property-name"],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
    // Important keywords
    {
      scope: ["keyword.other.important"],
      settings: {
        foreground: colors.scope01,
        fontStyle: "",
      },
    },
    // Element
    {
      scope: ["entity.other.attribute-name.id"],
      settings: {
        foreground: colors.scope07,
        fontStyle: "",
      },
    },
    // Pseudo-element
    {
      scope: ["entity.other.attribute-name.pseudo-element"],
      settings: {
        foreground: colors.scope15,
        fontStyle: "",
      },
    },
    // Class
    {
      scope: ["entity.other.attribute-name.class"],
      settings: {
        foreground: colors.scope03,
        fontStyle: "",
      },
    },
    // Pseudo-class
    {
      scope: ["entity.other.attribute-name.pseudo-class"],
      settings: {
        foreground: colors.scope11,
        fontStyle: "",
      },
    },
    // Keyframe
    {
      scope: ["entity.other.keyframe-offset"],
      settings: {
        foreground: colors.scope16,
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
        foreground: colors.scope08,
        fontStyle: "",
      },
    },
    // Less tag references
    {
      scope: ["punctuation.definition.entity"],
      settings: {
        foreground: colors.scope05,
        fontStyle: "",
      },
    },
  ];
};
