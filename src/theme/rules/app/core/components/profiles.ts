import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "profileBadge.background": styles.fill.control.prominent,
    "profileBadge.foreground": styles.fill.text.sec,
    "profiles.sashBorder": styles.stroke.focus.default,
  };
};
