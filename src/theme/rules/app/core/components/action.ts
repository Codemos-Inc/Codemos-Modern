import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "toolbar.activeBackground": colors.fill.control.pressed,
    "toolbar.hoverBackground": colors.fill.control.rest,
    "toolbar.hoverOutline": colors.stroke.control.default,
  };
};
