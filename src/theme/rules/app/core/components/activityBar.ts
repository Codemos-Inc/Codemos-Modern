import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const activityBarRules = {
    "activityBar.background": colors.bg.solid.base,
    "activityBar.dropBorder": colors.fill.accent.pri,
    "activityBar.foreground": colors.fill.text.pri,
    "activityBar.inactiveForeground": colors.fill.text.sec,
    "activityBar.border": colors.stroke.divider.default,
    "activityBarBadge.background": colors.fill.accent.pri,
    "activityBarBadge.foreground": colors.fill.textOnColor.pri,
    "activityBar.activeBorder": colors.fill.accent.pri,
    "activityBar.activeBackground": colors.fill.control.rest,
    "activityBar.activeFocusBorder": colors.basic.neutral.pri,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    activityBarRules["activityBar.activeBorder"] = TRANSPARENT;
    activityBarRules["activityBar.foreground"] = colors.fill.accent.pri;
  }
  return activityBarRules;
};
