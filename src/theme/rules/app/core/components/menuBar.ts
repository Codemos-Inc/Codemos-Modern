import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "menu.background": colors.bg.solid.flyout,
    "menu.border": colors.stroke.surface.flyout,
    "menu.foreground": colors.fill.text.pri,
    "menu.selectionBackground": colors.fill.control.rest,
    "menu.selectionBorder": colors.stroke.control.default,
    "menu.selectionForeground": colors.fill.text.pri,
    "menu.separatorBackground": colors.stroke.divider.default,
    "menubar.selectionBackground": colors.fill.control.rest,
    "menubar.selectionBorder": colors.stroke.control.default,
    "menubar.selectionForeground": colors.fill.text.pri,
  };
};
