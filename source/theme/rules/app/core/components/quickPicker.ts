import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "pickerGroup.border": styles.stroke.divider.default,
    "pickerGroup.foreground": styles.fill.accentText.pri,
    "quickInput.background": styles.bg.solid.flyout,
    "quickInput.foreground": styles.fill.text.sec,
    "quickInputList.focusBackground": styles.fill.control.rest,
    "quickInputList.focusForeground": styles.fill.text.pri,
    "quickInputList.focusIconForeground": styles.fill.text.pri,
    "quickInputTitle.background": styles.bg.solid.base,
  };
};
