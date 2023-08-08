import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const sideBarRules = {
    "sideBar.background": colors.bg.solid.surface,
    "sideBar.border": colors.stroke.divider.default,
    "sideBar.dropBackground": colors.effect.smoke.default,
    "sideBar.foreground": colors.fill.text.sec,
    "sideBarSectionHeader.background": colors.fill.control.subtle,
    "sideBarSectionHeader.border": colors.stroke.focus.default,
    "sideBarSectionHeader.foreground": colors.fill.text.sec,
    "sideBarTitle.foreground": colors.fill.text.pri,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    sideBarRules["sideBarSectionHeader.background"] = TRANSPARENT;
    sideBarRules["sideBarSectionHeader.border"] = colors.stroke.control.default;
  }
  return sideBarRules;
};
