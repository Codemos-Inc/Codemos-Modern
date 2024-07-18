import { ThemeContext } from "../../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "charts.foreground": colors.fill.textOnColor.pri,
    "charts.lines": colors.stroke.divider.default,
    "charts.red": colors.basic.def.red.pri,
    "charts.blue": colors.basic.def.blue.pri,
    "charts.yellow": colors.basic.def.yellow.pri,
    "charts.orange": colors.basic.def.orange.pri,
    "charts.green": colors.basic.def.green.pri,
    "charts.purple": colors.basic.def.purple.pri,
  };
};
