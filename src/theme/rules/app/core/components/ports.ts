import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "ports.iconRunningProcessForeground": colors.basic.def.green.pri,
  };
};
