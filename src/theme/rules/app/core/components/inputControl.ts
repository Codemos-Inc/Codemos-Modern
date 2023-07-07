import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "input.background": colors.fill.control.rest,
    "input.border": colors.stroke.control.default,
    "input.foreground": colors.fill.text.pri,
    "input.placeholderForeground": colors.fill.text.sec,
    "inputOption.activeBackground": colors.fill.accent.pri,
    "inputOption.activeBorder": colors.stroke.control.default,
    "inputOption.activeForeground": colors.fill.textOnColor.pri,
    "inputOption.hoverBackground": colors.fill.control.rest,
    "inputValidation.errorBackground": colors.fill.system.bg.red,
    "inputValidation.errorBorder": colors.basic.def.red.qua,
    "inputValidation.errorForeground": colors.fill.system.fg.red,
    "inputValidation.infoBackground": colors.fill.system.bg.blue,
    "inputValidation.infoBorder": colors.basic.def.blue.qua,
    "inputValidation.infoForeground": colors.fill.system.fg.blue,
    "inputValidation.warningBackground": colors.fill.system.bg.orange,
    "inputValidation.warningBorder": colors.basic.def.orange.qua,
    "inputValidation.warningForeground": colors.fill.system.fg.orange,
  };
};
