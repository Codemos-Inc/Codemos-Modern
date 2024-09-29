import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Strings
    {
      scope: ["source.dart string.interpolated"],
      settings: {
        foreground: colors.s00,
        fontStyle: "",
      },
    },
    // Interpolated strings
    {
      scope: ["source.dart string.interpolated meta.embedded.expression"],
      settings: {
        foreground: colors.s14,
        fontStyle: "",
      },
    },
  ];
};
