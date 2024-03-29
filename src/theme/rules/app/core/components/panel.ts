import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const panelRules = {
    "panel.background": colors.bg.solid.surface,
    "panel.border": colors.stroke.divider.default,
    "panel.dropBorder": colors.fill.accent.pri,
    "panelTitle.activeBorder": colors.fill.accent.pri,
    "panelTitle.activeForeground": colors.fill.text.pri,
    "panelTitle.inactiveForeground": colors.fill.text.sec,
    "panelInput.border": colors.stroke.control.default,
    "panelSection.border": colors.stroke.focus.default,
    "panelSection.dropBackground": colors.effect.smoke.default,
    "panelSectionHeader.background": colors.fill.control.subtle,
    "panelSectionHeader.foreground": colors.fill.text.sec,
    "panelSectionHeader.border": colors.stroke.focus.default,
    "outputView.background": colors.bg.solid.canvas,
    "outputViewStickyScroll.background": colors.bg.solid.surface,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    panelRules["panelTitle.activeBorder"] = TRANSPARENT;
    panelRules["panelTitle.activeForeground"] = colors.fill.accent.pri;
    panelRules["panelSectionHeader.background"] = TRANSPARENT;
    panelRules["panelSectionHeader.border"] = colors.stroke.control.default;
    panelRules["outputView.background"] = colors.bg.solid.base;
  }
  return panelRules;
};
