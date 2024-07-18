import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "profileBadge.background": colors.fill.control.prominent,
    "profileBadge.foreground": colors.fill.text.sec,
    "profiles.sashBorder": colors.stroke.focus.default,
  };
};
