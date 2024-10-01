import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "settings.checkboxBackground": styles.fill.control.rest,
    "settings.checkboxBorder": styles.stroke.control.default,
    "settings.checkboxForeground": styles.fill.text.active,
    "settings.dropdownBackground": styles.fill.control.rest,
    "settings.dropdownBorder": styles.stroke.control.default,
    "settings.dropdownForeground": styles.fill.text.pri,
    "settings.dropdownListBorder": styles.stroke.surface.flyout,
    "settings.focusedRowBackground": styles.fill.control.subtle,
    "settings.focusedRowBorder": styles.stroke.control.default,
    "settings.headerBorder": styles.stroke.divider.default,
    "settings.headerForeground": styles.fill.text.pri,
    "settings.modifiedItemIndicator": styles.basic.def.blue.pri,
    "settings.numberInputBackground": styles.fill.control.rest,
    "settings.numberInputBorder": styles.stroke.control.default,
    "settings.numberInputForeground": styles.fill.text.pri,
    "settings.rowHoverBackground": styles.fill.control.subtle,
    "settings.sashBorder": styles.stroke.focus.default,
    "settings.settingsHeaderHoverForeground": styles.fill.text.active,
    "settings.textInputBackground": styles.fill.control.rest,
    "settings.textInputBorder": styles.stroke.control.default,
    "settings.textInputForeground": styles.fill.text.pri,
  };
};
