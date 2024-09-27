import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "charts.blue": styles.basic.def.blue.pri,
    "charts.foreground": styles.fill.textOnColor.pri,
    "charts.green": styles.basic.def.green.pri,
    "charts.lines": styles.stroke.divider.default,
    "charts.orange": styles.basic.def.orange.pri,
    "charts.purple": styles.basic.def.purple.pri,
    "charts.red": styles.basic.def.red.pri,
    "charts.yellow": styles.basic.def.yellow.pri,
  };
};
