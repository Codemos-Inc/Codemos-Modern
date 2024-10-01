import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "menu.background": styles.bg.solid.flyout,
    "menu.border": styles.stroke.surface.flyout,
    "menu.foreground": styles.fill.text.pri,
    "menu.selectionBackground": styles.fill.control.rest,
    "menu.selectionBorder": styles.stroke.control.default,
    "menu.selectionForeground": styles.fill.text.pri,
    "menu.separatorBackground": styles.stroke.divider.default,
    "menubar.selectionBackground": styles.fill.control.rest,
    "menubar.selectionBorder": styles.stroke.control.default,
    "menubar.selectionForeground": styles.fill.text.pri,
  };
};
