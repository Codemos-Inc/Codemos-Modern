import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "commandCenter.activeBackground": colors.fill.control.hover,
    "commandCenter.activeBorder": colors.stroke.control.default,
    "commandCenter.activeForeground": colors.fill.text.pri,
    "commandCenter.background": colors.fill.control.rest,
    "commandCenter.border": colors.stroke.control.default,
    "commandCenter.foreground": colors.fill.text.pri,
    "commandCenter.inactiveBorder": colors.stroke.control.default,
    "commandCenter.inactiveForeground": colors.fill.text.sec,
  };
};
