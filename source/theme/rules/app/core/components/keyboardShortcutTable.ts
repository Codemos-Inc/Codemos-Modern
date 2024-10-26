import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "keybindingTable.headerBackground": styles.bg.solid.flyout,
    "keybindingTable.rowsBackground": styles.bg.solid.flyout,
  };
};
