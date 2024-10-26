import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "editorActionList.background": styles.bg.solid.flyout,
    "editorActionList.focusBackground": styles.fill.control.rest,
    "editorActionList.focusForeground": styles.fill.text.pri,
    "editorActionList.foreground": styles.fill.text.sec,
    "toolbar.activeBackground": styles.fill.control.pressed,
    "toolbar.hoverBackground": styles.fill.control.rest,
    "toolbar.hoverOutline": styles.stroke.control.default,
  };
};
