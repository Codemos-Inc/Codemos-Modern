import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "chat.requestBackground": colors.fill.control.rest,
    "chat.requestBorder": colors.stroke.divider.default,
  };
};
