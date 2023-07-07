import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "scrollbar.shadow": colors.effect.shadow.default,
    "scrollbarSlider.activeBackground": colors.fill.control.pressed,
    "scrollbarSlider.background": colors.fill.control.rest,
    "scrollbarSlider.hoverBackground": colors.fill.control.hover,
  };
};
