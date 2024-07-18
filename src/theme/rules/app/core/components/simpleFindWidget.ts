import { ThemeContext } from "../../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "simpleFindWidget.sashBorder": colors.fill.accent.pri,
  };
};
