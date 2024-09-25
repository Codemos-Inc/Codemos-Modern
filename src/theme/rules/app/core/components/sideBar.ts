import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const rules = {
    "sideBar.background": colors.bg.solid.surface,
    "sideBar.foreground": colors.fill.text.sec,
    "sideBar.border": colors.stroke.divider.default,
    "sideBar.dropBackground": colors.effect.smoke.default,
    "sideBarTitle.foreground": colors.fill.text.pri,
    "sideBarSectionHeader.background": colors.fill.control.subtle,
    "sideBarSectionHeader.foreground": colors.fill.text.sec,
    "sideBarSectionHeader.border": colors.stroke.focus.default,
    "sideBarActivityBarTop.border": colors.stroke.divider.default,
    "sideBarTitle.background": colors.bg.solid.base,
    "sideBarStickyScroll.background": colors.bg.solid.base,
    "sideBarStickyScroll.border": colors.stroke.divider.default,
    "sideBarStickyScroll.shadow": colors.effect.shadow.default,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    rules["sideBarSectionHeader.background"] = TRANSPARENT;
    rules["sideBarSectionHeader.border"] = colors.stroke.control.default;
  } else if (design === "flat") {
    rules["sideBarSectionHeader.background"] = TRANSPARENT;
    rules["sideBarSectionHeader.border"] = colors.stroke.control.default;
  }
  return rules;
};
