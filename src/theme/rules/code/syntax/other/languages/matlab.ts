import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Number suffixes
    {
      scope: ["source.matlab storage.type.number.imaginary"],
      settings: {
        foreground: colors.scope12,
        fontStyle: "",
      },
    },
  ];
};
