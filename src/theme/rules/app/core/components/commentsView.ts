import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "commentsView.resolvedIcon": styles.fill.text.sec,
    "commentsView.unresolvedIcon": styles.basic.def.blue.pri,
  };
};
