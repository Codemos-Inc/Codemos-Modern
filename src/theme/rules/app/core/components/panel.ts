import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "outputView.background": styles.bg.solid.surface,
    "outputViewStickyScroll.background": styles.bg.solid.base,
    "panel.background": styles.bg.solid.base,
    "panel.border": styles.stroke.divider.default,
    "panel.dropBorder": styles.fill.accent.pri,
    "panelInput.border": styles.stroke.control.default,
    "panelSection.border": styles.stroke.focus.default,
    "panelSection.dropBackground": styles.effect.smoke.default,
    "panelSectionHeader.background": styles.fill.control.subtle,
    "panelSectionHeader.border": styles.stroke.focus.default,
    "panelSectionHeader.foreground": styles.fill.text.sec,
    "panelStickyScroll.background": styles.bg.solid.base,
    "panelStickyScroll.border": styles.stroke.divider.default,
    "panelStickyScroll.shadow": styles.effect.shadow.default,
    "panelTitle.activeBorder": styles.fill.accent.pri,
    "panelTitle.activeForeground": styles.fill.text.pri,
    "panelTitle.inactiveForeground": styles.fill.text.sec,
  };
  const design = themeContext.variantConfig.design;
  if (design === "natural" || design === "minimal") {
    rules["outputView.background"] = styles.bg.solid.base;
    rules["panelSectionHeader.background"] = TRANSPARENT;
    rules["panelSectionHeader.border"] = styles.stroke.control.default;
    rules["panelTitle.activeBorder"] = TRANSPARENT;
    rules["panelTitle.activeForeground"] = styles.fill.accent.pri;
  } else if (design === "flat") {
    rules["outputView.background"] = styles.bg.solid.base;
    rules["panelSectionHeader.background"] = TRANSPARENT;
    rules["panelSectionHeader.border"] = styles.stroke.control.default;
    rules["panelTitle.activeBorder"] = TRANSPARENT;
    rules["panelTitle.activeForeground"] = styles.fill.accent.pri;
  }
  return rules;
};
