import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "commandCenter.foreground": colors.fill.text.pri,
    "commandCenter.activeForeground": colors.fill.text.pri,
    "commandCenter.background": colors.fill.control.rest,
    "commandCenter.activeBackground": colors.fill.control.hover,
    "commandCenter.border": colors.stroke.control.default,
    "commandCenter.inactiveForeground": colors.fill.text.sec,
    "commandCenter.inactiveBorder": colors.stroke.control.default,
    "commandCenter.activeBorder": colors.stroke.control.default,
    "commandCenter.debuggingBackground": colors.basic.def.yellow.qui,
  };
};
