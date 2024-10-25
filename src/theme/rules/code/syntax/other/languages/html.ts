import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Entity punctuations
    {
      scope: ["punctuation.definition.entity"],
      settings: {
        foreground: colors.scope15,
        fontStyle: "",
      },
    },
  ];
};
