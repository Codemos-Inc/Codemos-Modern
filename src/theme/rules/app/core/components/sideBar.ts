import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const sideBarRules = {
    "sideBar.background": colors.bg.solid.surface,
    "sideBar.foreground": colors.fill.text.sec,
    "sideBar.border": colors.stroke.divider.default,
    "sideBar.dropBackground": colors.effect.smoke.default,
    "sideBarTitle.foreground": colors.fill.text.pri,
    "sideBarSectionHeader.background": colors.fill.control.subtle,
    "sideBarSectionHeader.foreground": colors.fill.text.sec,
    "sideBarSectionHeader.border": colors.stroke.focus.default,
    "sideBarActivityBarTop.border": colors.stroke.divider.default,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    sideBarRules["sideBarSectionHeader.background"] = TRANSPARENT;
    sideBarRules["sideBarSectionHeader.border"] = colors.stroke.control.default;
  }
  return sideBarRules;
};
