import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // magicFunction
    {
      scope: "support.function.magic",
      settings: {
        foreground: colors.s07,
      },
    },
  ];
};
