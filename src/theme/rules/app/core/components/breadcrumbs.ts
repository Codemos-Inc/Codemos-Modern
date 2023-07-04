import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "breadcrumb.activeSelectionForeground": colors.fill.accentText.pri,
    "breadcrumb.background": colors.bg.solid.base,
    "breadcrumb.focusForeground": colors.fill.text.pri,
    "breadcrumb.foreground": colors.fill.text.sec,
    "breadcrumbPicker.background": colors.bg.solid.flyout,
  };
};
