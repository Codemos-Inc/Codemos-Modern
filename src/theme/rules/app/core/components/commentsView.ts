import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "commentsView.resolvedIcon": colors.fill.text.sec,
    "commentsView.unresolvedIcon": colors.basic.def.blue.pri,
  };
};
