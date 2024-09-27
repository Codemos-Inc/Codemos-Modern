import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  const decorations = themeContext.textDecorations;
  return [
    // Vendor property
    {
      scope: ["support.type.vendored.property-name"],
      settings: {
        foreground: colors.s01,
        fontStyle: `${decorations.underline ? "underline" : ""}`,
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
        foreground: colors.s09,
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
  ];
};
