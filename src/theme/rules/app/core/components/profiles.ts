import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "profileBadge.background": colors.fill.control.prominent,
    "profileBadge.foreground": colors.fill.text.sec,
  };
};
