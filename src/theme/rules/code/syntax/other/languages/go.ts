import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // String placeholders
    {
      scope: ["constant.other.placeholder"],
      settings: {
        foreground: colors.s14,
        fontStyle: "",
      },
    },
  ];
};
