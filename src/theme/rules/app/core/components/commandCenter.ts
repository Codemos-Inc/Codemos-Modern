import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "commandCenter.activeBackground": styles.fill.control.hover,
    "commandCenter.activeBorder": styles.stroke.control.default,
    "commandCenter.activeForeground": styles.fill.text.pri,
    "commandCenter.background": styles.fill.control.rest,
    "commandCenter.border": styles.stroke.control.default,
    "commandCenter.debuggingBackground": styles.basic.def.yellow.qui,
    "commandCenter.foreground": styles.fill.text.pri,
    "commandCenter.inactiveBorder": styles.stroke.control.default,
    "commandCenter.inactiveForeground": styles.fill.text.sec,
  };
};
