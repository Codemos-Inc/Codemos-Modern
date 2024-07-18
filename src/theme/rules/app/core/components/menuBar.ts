import { ThemeContext } from "../../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "menu.selectionForeground": colors.fill.text.pri,
    "menu.selectionBackground": colors.fill.control.rest,
    "menu.selectionBorder": colors.stroke.control.default,
    "menu.foreground": colors.fill.text.pri,
    "menu.background": colors.bg.solid.flyout,
    "menubar.selectionForeground": colors.fill.text.pri,
    "menubar.selectionBackground": colors.fill.control.rest,
    "menubar.selectionBorder": colors.stroke.control.default,
    "menu.separatorBackground": colors.stroke.divider.default,
    "menu.border": colors.stroke.surface.flyout,
  };
};
