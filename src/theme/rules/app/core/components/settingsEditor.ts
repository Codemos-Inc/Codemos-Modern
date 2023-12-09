import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "settings.headerForeground": colors.fill.text.pri,
    "settings.modifiedItemIndicator": colors.basic.def.blue.pri,
    "settings.dropdownBackground": colors.fill.control.rest,
    "settings.dropdownForeground": colors.fill.text.pri,
    "settings.dropdownBorder": colors.stroke.control.default,
    "settings.dropdownListBorder": colors.stroke.surface.flyout,
    "settings.checkboxBackground": colors.fill.control.rest,
    "settings.checkboxForeground": colors.fill.text.pri,
    "settings.checkboxBorder": colors.stroke.control.default,
    "settings.rowHoverBackground": colors.fill.control.subtle,
    "settings.textInputBackground": colors.fill.control.rest,
    "settings.textInputForeground": colors.fill.text.pri,
    "settings.textInputBorder": colors.stroke.control.default,
    "settings.numberInputBackground": colors.fill.control.rest,
    "settings.numberInputForeground": colors.fill.text.pri,
    "settings.numberInputBorder": colors.stroke.control.default,
    "settings.focusedRowBackground": colors.fill.control.subtle,
    "settings.focusedRowBorder": colors.stroke.control.default,
    "settings.headerBorder": colors.stroke.divider.default,
    "settings.sashBorder": colors.stroke.focus.default,
    "settings.settingsHeaderHoverForeground": colors.fill.text.active,
  };
};
