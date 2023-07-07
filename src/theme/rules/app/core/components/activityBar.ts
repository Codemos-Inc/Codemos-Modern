import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "activityBar.activeBackground": colors.fill.control.rest,
    "activityBar.activeBorder": colors.fill.accent.pri,
    "activityBar.activeFocusBorder": colors.basic.neutral.pri,
    "activityBar.background": colors.bg.solid.base,
    "activityBar.border": colors.stroke.divider.default,
    "activityBar.dropBorder": colors.fill.accent.pri,
    "activityBar.foreground": colors.fill.text.pri,
    "activityBar.inactiveForeground": colors.fill.text.sec,
    "activityBarBadge.background": colors.fill.accent.pri,
    "activityBarBadge.foreground": colors.fill.textOnColor.pri,
  };
};
