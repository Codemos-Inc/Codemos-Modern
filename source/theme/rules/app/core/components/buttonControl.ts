import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "button.background": styles.fill.accent.pri,
    "button.border": styles.stroke.control.default,
    "button.foreground": styles.fill.onAccent.pri,
    "button.hoverBackground": styles.fill.accent.sec,
    "button.secondaryBackground": styles.fill.control.rest,
    "button.secondaryForeground": styles.fill.text.pri,
    "button.secondaryHoverBackground": styles.fill.control.hover,
    "button.separator": styles.fill.onAccent.pri,
    "checkbox.background": styles.fill.control.rest,
    "checkbox.border": styles.stroke.control.default,
    "checkbox.foreground": styles.fill.text.active,
    "checkbox.selectBackground": styles.fill.control.rest,
    "checkbox.selectBorder": styles.stroke.control.default,
    "radio.activeBackground": styles.fill.accent.pri,
    "radio.activeBorder": styles.stroke.control.default,
    "radio.activeForeground": styles.fill.onAccent.pri,
    "radio.inactiveBackground": styles.fill.control.rest,
    "radio.inactiveBorder": styles.stroke.control.default,
    "radio.inactiveForeground": styles.fill.text.pri,
    "radio.inactiveHoverBackground": styles.fill.control.hover,
  };
};
