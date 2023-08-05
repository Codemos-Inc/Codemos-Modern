import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const panelRules = {
    "panel.background": colors.bg.solid.surface,
    "panel.border": colors.stroke.divider.default,
    "panel.dropBorder": colors.fill.accent.pri,
    "panelInput.border": colors.stroke.control.default,
    "panelSection.border": colors.stroke.focus.default,
    "panelSection.dropBackground": colors.effect.smoke.default,
    "panelSectionHeader.background": colors.fill.control.subtle,
    "panelSectionHeader.border": colors.stroke.focus.default,
    "panelSectionHeader.foreground": colors.fill.text.sec,
    "panelTitle.activeBorder": colors.fill.accent.pri,
    "panelTitle.activeForeground": colors.fill.text.pri,
    "panelTitle.inactiveForeground": colors.fill.text.sec,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    panelRules["panelSectionHeader.background"] = TRANSPARENT;
    panelRules["panelSectionHeader.border"] = colors.stroke.control.default;
    panelRules["panelTitle.activeBorder"] = TRANSPARENT;
    panelRules["panelTitle.activeForeground"] = colors.fill.accent.pri;
  }
  return panelRules;
};
