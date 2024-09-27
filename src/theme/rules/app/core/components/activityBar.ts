import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "activityBar.activeBackground": styles.fill.control.rest,
    "activityBar.activeBorder": styles.fill.accent.pri,
    "activityBar.activeFocusBorder": styles.basic.neutral.pri,
    "activityBar.background": styles.bg.solid.base,
    "activityBar.border": styles.stroke.divider.default,
    "activityBar.dropBorder": styles.fill.accent.pri,
    "activityBar.foreground": styles.fill.text.pri,
    "activityBar.inactiveForeground": styles.fill.text.sec,
    "activityBarBadge.background": styles.fill.accent.pri,
    "activityBarBadge.foreground": styles.fill.textOnColor.pri,
    "activityBarTop.activeBackground": styles.fill.control.rest,
    "activityBarTop.activeBorder": styles.fill.accent.pri,
    "activityBarTop.background": styles.bg.solid.base,
    "activityBarTop.dropBorder": styles.fill.accent.pri,
    "activityBarTop.foreground": styles.fill.text.pri,
    "activityBarTop.inactiveForeground": styles.fill.text.sec,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    rules["activityBar.activeBorder"] = TRANSPARENT;
    rules["activityBar.foreground"] = styles.fill.accent.pri;
    rules["activityBarTop.activeBorder"] = TRANSPARENT;
    rules["activityBarTop.foreground"] = styles.fill.accent.pri;
  } else if (design === "flat") {
    rules["activityBar.activeBackground"] = TRANSPARENT;
    rules["activityBar.activeBorder"] = TRANSPARENT;
    rules["activityBar.foreground"] = styles.fill.accent.pri;
    rules["activityBarTop.activeBackground"] = TRANSPARENT;
    rules["activityBarTop.activeBorder"] = TRANSPARENT;
    rules["activityBarTop.foreground"] = styles.fill.accent.pri;
  }
  return rules;
};
