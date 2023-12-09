import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "dropdown.background": colors.fill.control.rest,
    "dropdown.listBackground": colors.bg.solid.flyout,
    "dropdown.border": colors.stroke.control.default,
    "dropdown.foreground": colors.fill.text.pri,
  };
};
