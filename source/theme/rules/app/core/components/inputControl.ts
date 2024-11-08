import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "input.background": styles.fill.control.restSolid, // 🟢 Undesired solution!
    "input.border": styles.stroke.control.default,
    "input.foreground": styles.fill.text.pri,
    "input.placeholderForeground": styles.fill.text.sec,
    "inputOption.activeBackground": styles.fill.accent.pri,
    "inputOption.activeBorder": styles.stroke.control.default,
    "inputOption.activeForeground": styles.fill.onAccent.pri,
    "inputOption.hoverBackground": styles.fill.control.rest,
    "inputValidation.errorBackground": styles.fill.system.bg.red,
    "inputValidation.errorBorder": styles.basic.def.red.qua,
    "inputValidation.errorForeground": styles.fill.system.fg.red,
    "inputValidation.infoBackground": styles.fill.system.bg.blue,
    "inputValidation.infoBorder": styles.basic.def.blue.qua,
    "inputValidation.infoForeground": styles.fill.system.fg.blue,
    "inputValidation.warningBackground": styles.fill.system.bg.orange,
    "inputValidation.warningBorder": styles.basic.def.orange.qua,
    "inputValidation.warningForeground": styles.fill.system.fg.orange,
  };
};
