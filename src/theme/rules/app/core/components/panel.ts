import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const rules = {
    "panel.background": colors.bg.solid.base,
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
    "panelStickyScroll.background": colors.bg.solid.base,
    "panelStickyScroll.border": colors.stroke.divider.default,
    "panelStickyScroll.shadow": colors.effect.shadow.default,
    "outputView.background": colors.bg.solid.surface,
    "outputViewStickyScroll.background": colors.bg.solid.base,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    rules["panelTitle.activeBorder"] = TRANSPARENT;
    rules["panelTitle.activeForeground"] = colors.fill.accent.pri;
    rules["panelSectionHeader.background"] = TRANSPARENT;
    rules["panelSectionHeader.border"] = colors.stroke.control.default;
    rules["outputView.background"] = colors.bg.solid.base;
  } else if (design === "flat") {
    rules["panelTitle.activeBorder"] = TRANSPARENT;
    rules["panelTitle.activeForeground"] = colors.fill.accent.pri;
    rules["panelSectionHeader.background"] = TRANSPARENT;
    rules["panelSectionHeader.border"] = colors.stroke.control.default;
    rules["outputView.background"] = colors.bg.solid.base;
  }
  return rules;
};
