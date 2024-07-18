import { ThemeContext } from "../../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "keybindingLabel.background": colors.fill.control.rest,
    "keybindingLabel.foreground": colors.fill.text.pri,
    "keybindingLabel.border": colors.stroke.control.default,
    "keybindingLabel.bottomBorder": colors.stroke.control.elevation,
  };
};
