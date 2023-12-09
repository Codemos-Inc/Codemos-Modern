import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "titleBar.activeBackground": colors.bg.solid.base,
    "titleBar.activeForeground": colors.fill.text.pri,
    "titleBar.inactiveBackground": colors.bg.solid.base,
    "titleBar.inactiveForeground": colors.fill.text.sec,
    "titleBar.border": colors.stroke.divider.default,
  };
};
