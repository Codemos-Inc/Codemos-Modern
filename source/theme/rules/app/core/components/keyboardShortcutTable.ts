import { ThemeContext } from "../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const styles = themeContext.styles;
  return {
    "keybindingTable.headerBackground": styles.bg.solid.flyout,
    "keybindingTable.rowsBackground": styles.fill.control.subtle,
  };
}
