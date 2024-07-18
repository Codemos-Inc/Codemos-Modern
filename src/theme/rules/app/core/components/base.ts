import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    focusBorder: colors.stroke.focus.default,
    foreground: colors.fill.text.pri,
    disabledForeground: colors.fill.text.disabled,
    "widget.border": colors.stroke.surface.flyout,
    "widget.shadow": colors.effect.shadow.default,
    "selection.background": colors.basic.neutral.sen,
    descriptionForeground: colors.fill.text.sec,
    errorForeground: colors.basic.def.red.pri,
    "icon.foreground": colors.fill.text.pri,
    "sash.hoverBorder": colors.stroke.focus.default,
  };
};
