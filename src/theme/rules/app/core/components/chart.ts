import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "charts.blue": colors.basic.def.blue.pri,
    "charts.foreground": colors.fill.textOnColor.pri,
    "charts.green": colors.basic.def.green.pri,
    "charts.lines": colors.stroke.divider.default,
    "charts.orange": colors.basic.def.orange.pri,
    "charts.purple": colors.basic.def.purple.pri,
    "charts.red": colors.basic.def.red.pri,
    "charts.yellow": colors.basic.def.yellow.pri,
  };
};
