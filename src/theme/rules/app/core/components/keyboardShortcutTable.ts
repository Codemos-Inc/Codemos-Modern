import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "keybindingTable.headerBackground": colors.bg.solid.onCanvas,
    "keybindingTable.rowsBackground": colors.bg.solid.onCanvas,
  };
};
