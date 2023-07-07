import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "pickerGroup.border": colors.stroke.divider.default,
    "pickerGroup.foreground": colors.fill.accentText.pri,
    "quickInput.background": colors.bg.solid.flyout,
    "quickInput.foreground": colors.fill.text.sec,
    "quickInputList.focusBackground": colors.fill.control.rest,
    "quickInputList.focusForeground": colors.fill.text.pri,
    "quickInputList.focusIconForeground": colors.fill.text.pri,
    "quickInputTitle.background": colors.bg.solid.base,
  };
};
