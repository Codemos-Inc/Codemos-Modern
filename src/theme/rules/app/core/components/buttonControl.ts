import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "button.background": colors.fill.accent.pri,
    "button.foreground": colors.fill.textOnColor.pri,
    "button.border": colors.stroke.control.default,
    "button.separator": colors.fill.textOnColor.pri,
    "button.hoverBackground": colors.fill.accent.sec,
    "button.secondaryForeground": colors.fill.text.pri,
    "button.secondaryBackground": colors.fill.control.rest,
    "button.secondaryHoverBackground": colors.fill.control.hover,
    "checkbox.background": colors.fill.control.rest,
    "checkbox.foreground": colors.fill.text.pri,
    "checkbox.border": colors.stroke.control.default,
    "checkbox.selectBackground": colors.fill.control.rest,
    "checkbox.selectBorder": colors.stroke.control.default,
  };
};
