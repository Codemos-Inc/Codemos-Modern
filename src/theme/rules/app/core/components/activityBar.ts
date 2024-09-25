import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const rules = {
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
    "activityBarTop.foreground": colors.fill.text.pri,
    "activityBarTop.activeBorder": colors.fill.accent.pri,
    "activityBarTop.inactiveForeground": colors.fill.text.sec,
    "activityBarTop.dropBorder": colors.fill.accent.pri,
    "activityBarTop.background": colors.bg.solid.base,
    "activityBarTop.activeBackground": colors.fill.control.rest,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    rules["activityBar.activeBorder"] = TRANSPARENT;
    rules["activityBar.foreground"] = colors.fill.accent.pri;
    rules["activityBarTop.activeBorder"] = TRANSPARENT;
    rules["activityBarTop.foreground"] = colors.fill.accent.pri;
  } else if (design === "flat") {
    rules["activityBar.activeBorder"] = TRANSPARENT;
    rules["activityBar.foreground"] = colors.fill.accent.pri;
    rules["activityBar.activeBackground"] = TRANSPARENT;
    rules["activityBarTop.activeBorder"] = TRANSPARENT;
    rules["activityBarTop.foreground"] = colors.fill.accent.pri;
    rules["activityBarTop.activeBackground"] = TRANSPARENT;
  }
  return rules;
};
