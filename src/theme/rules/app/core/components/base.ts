import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "icon.foreground": styles.fill.text.pri,
    "sash.hoverBorder": styles.stroke.focus.default,
    "selection.background": styles.basic.neutral.sen,
    "widget.border": styles.stroke.surface.flyout,
    "widget.shadow": styles.effect.shadow.default,
    descriptionForeground: styles.fill.text.sec,
    disabledForeground: styles.fill.text.disabled,
    errorForeground: styles.basic.def.red.pri,
    focusBorder: styles.stroke.focus.default,
    foreground: styles.fill.text.pri,
  };
};
