import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "keybindingTable.headerBackground": styles.bg.solid.onCanvas,
    "keybindingTable.rowsBackground": styles.bg.solid.onCanvas,
  };
};
