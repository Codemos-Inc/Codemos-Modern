import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "button.background": colors.fill.accent.pri,
    "button.border": colors.stroke.control.default,
    "button.foreground": colors.fill.textOnColor.pri,
    "button.hoverBackground": colors.fill.accent.sec,
    "button.secondaryBackground": colors.fill.control.rest,
    "button.secondaryForeground": colors.fill.text.pri,
    "button.secondaryHoverBackground": colors.fill.control.hover,
    "button.separator": colors.fill.textOnColor.pri,
    "checkbox.background": colors.fill.control.rest,
    "checkbox.border": colors.stroke.control.default,
    "checkbox.foreground": colors.fill.text.pri,
    "checkbox.selectBackground": colors.fill.control.rest,
    "checkbox.selectBorder": colors.stroke.control.default,
  };
};
