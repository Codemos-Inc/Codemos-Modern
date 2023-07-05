import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "keybindingLabel.background": colors.fill.control.rest,
    "keybindingLabel.border": colors.stroke.control.default,
    "keybindingLabel.bottomBorder": colors.stroke.control.elevation,
    "keybindingLabel.foreground": colors.fill.text.pri,
  };
};
