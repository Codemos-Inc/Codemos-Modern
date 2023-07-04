import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "settings.checkboxBackground": colors.fill.control.rest,
    "settings.checkboxBorder": colors.stroke.control.default,
    "settings.checkboxForeground": colors.fill.text.pri,
    "settings.dropdownBackground": colors.fill.control.rest,
    "settings.dropdownBorder": colors.stroke.control.default,
    "settings.dropdownForeground": colors.fill.text.pri,
    "settings.dropdownListBorder": colors.stroke.surface.flyout,
    "settings.focusedRowBackground": colors.fill.control.subtle,
    "settings.focusedRowBorder": colors.stroke.control.default,
    "settings.headerBorder": colors.stroke.divider.default,
    "settings.headerForeground": colors.fill.text.pri,
    "settings.modifiedItemIndicator": colors.basic.def.blue.pri,
    "settings.numberInputBackground": colors.fill.control.rest,
    "settings.numberInputBorder": colors.stroke.control.default,
    "settings.numberInputForeground": colors.fill.text.pri,
    "settings.rowHoverBackground": colors.fill.control.subtle,
    "settings.sashBorder": colors.stroke.focus.default,
    "settings.settingsHeaderHoverForeground": colors.fill.text.active,
    "settings.textInputBackground": colors.fill.control.rest,
    "settings.textInputBorder": colors.stroke.control.default,
    "settings.textInputForeground": colors.fill.text.pri,
  };
};
