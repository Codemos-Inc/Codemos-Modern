import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "keybindingLabel.background": styles.fill.control.rest,
    "keybindingLabel.border": styles.stroke.control.default,
    "keybindingLabel.bottomBorder": styles.stroke.control.elevation,
    "keybindingLabel.foreground": styles.fill.text.pri,
  };
};
