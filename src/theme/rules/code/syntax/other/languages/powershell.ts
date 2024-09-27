import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Functions calls
    {
      scope: ["source.powershell variable.other.member"],
      settings: {
        foreground: colors.s02,
        fontStyle: "",
      },
    },
  ];
};
