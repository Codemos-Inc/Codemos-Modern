import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "sideBar.background": colors.bg.solid.surface,
    "sideBar.border": colors.stroke.divider.default,
    "sideBar.dropBackground": colors.effect.smoke.default,
    "sideBar.foreground": colors.fill.text.sec,
    "sideBarSectionHeader.background": colors.fill.control.subtle,
    "sideBarSectionHeader.border": colors.stroke.focus.default,
    "sideBarSectionHeader.foreground": colors.fill.text.sec,
    "sideBarTitle.foreground": colors.fill.text.pri,
  };
};
