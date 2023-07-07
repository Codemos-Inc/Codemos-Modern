import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
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
};
