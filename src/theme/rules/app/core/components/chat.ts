import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "chat.requestBorder": colors.stroke.divider.default,
    "chat.slashCommandBackground": "#FF0000",
    "chat.slashCommandForeground": "#FF0000",
    "chat.avatarBackground": "#FF0000",
    "chat.avatarForeground": "#FF0000",
  };
};
