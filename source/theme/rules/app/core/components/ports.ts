import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "ports.iconRunningProcessForeground": styles.basic.def.green.pri,
  };
};
