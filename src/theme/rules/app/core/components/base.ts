import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    descriptionForeground: colors.fill.text.sec,
    disabledForeground: colors.fill.text.disabled,
    errorForeground: colors.basic.def.red.pri,
    focusBorder: colors.stroke.focus.default,
    foreground: colors.fill.text.pri,
    "icon.foreground": colors.fill.text.pri,
    "sash.hoverBorder": colors.stroke.focus.default,
    "selection.background": colors.basic.neutral.sen,
    "widget.border": colors.stroke.surface.flyout,
    "widget.shadow": colors.effect.shadow.default,
  };
};
