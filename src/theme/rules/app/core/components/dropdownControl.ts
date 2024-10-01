import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "dropdown.background": styles.fill.control.restSolid, // 🟢 Undesired solution!
    "dropdown.border": styles.stroke.control.default,
    "dropdown.foreground": styles.fill.text.pri,
    "dropdown.listBackground": styles.bg.solid.flyout,
  };
};
