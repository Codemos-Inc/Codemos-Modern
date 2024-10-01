import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Hash keys
    {
      scope: ["source.ruby constant.other.symbol"],
      settings: {
        foreground: colors.s11,
        fontStyle: "",
      },
    },
    // Properties
    {
      scope: [
        "source.ruby variable.other.constant.instance",
        "source.ruby variable.other.readwrite.instance",
      ],
      settings: {
        foreground: colors.s11,
        fontStyle: "",
      },
    },
  ];
};
