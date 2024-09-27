import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s00;
  return [
    // Strings
    {
      scope: ["string", "support.string"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // String quotes
    {
      scope: ["punctuation.definition.string", "support.punctuation.definition.string"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
    // Color constants
    {
      scope: [
        "constant.other.color",
        "constant.other.rgb-value",
        "support.constant.color",
        "variable.other.color",
      ],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
