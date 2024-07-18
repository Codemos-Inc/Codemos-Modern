import { ThemeContext } from "../../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "dropdown.background": colors.fill.control.restSolid, // 🟢 Undesired solution!
    "dropdown.listBackground": colors.bg.solid.flyout,
    "dropdown.border": colors.stroke.control.default,
    "dropdown.foreground": colors.fill.text.pri,
  };
};
