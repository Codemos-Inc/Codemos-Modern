import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "sideBar.background": styles.bg.solid.surface,
    "sideBar.border": styles.stroke.divider.default,
    "sideBar.dropBackground": styles.effect.smoke.default,
    "sideBar.foreground": styles.fill.text.sec,
    "sideBarActivityBarTop.border": styles.stroke.divider.default,
    "sideBarSectionHeader.background": styles.fill.control.subtle,
    "sideBarSectionHeader.border": styles.stroke.focus.default,
    "sideBarSectionHeader.foreground": styles.fill.text.sec,
    "sideBarStickyScroll.background": styles.bg.solid.base,
    "sideBarStickyScroll.border": styles.stroke.divider.default,
    "sideBarStickyScroll.shadow": styles.effect.shadow.default,
    "sideBarTitle.background": styles.bg.solid.base,
    "sideBarTitle.foreground": styles.fill.text.pri,
  };
  const design = themeContext.variantConfig.design;
  if (design === "natural" || design === "minimal") {
    rules["sideBarSectionHeader.background"] = TRANSPARENT;
    rules["sideBarSectionHeader.border"] = styles.stroke.control.default;
  } else if (design === "flat") {
    rules["sideBarSectionHeader.background"] = TRANSPARENT;
    rules["sideBarSectionHeader.border"] = styles.stroke.control.default;
  }
  return rules;
};
