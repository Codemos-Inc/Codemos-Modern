import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "titleBar.activeBackground": styles.bg.solid.base,
    "titleBar.activeForeground": styles.fill.text.pri,
    "titleBar.border": styles.stroke.divider.default,
    "titleBar.inactiveBackground": styles.bg.solid.base,
    "titleBar.inactiveForeground": styles.fill.text.sec,
  };
};
