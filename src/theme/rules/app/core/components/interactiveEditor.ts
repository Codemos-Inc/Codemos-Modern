import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "interactive.activeCodeBorder": "#FF0000", // 🔵 Unknown attribute
    "interactive.inactiveCodeBorder": "#FF0000", // 🔵 Unknown attribute
    "interactiveEditor.border": colors.stroke.surface.flyout,
    "interactiveEditor.regionHighlight": colors.basic.neutral.sep,
    "interactiveEditor.shadow": colors.effect.shadow.default,
    "interactiveEditorDiff.inserted": colors.basic.def.green.qui,
    "interactiveEditorDiff.removed": colors.basic.def.red.qui,
    "interactiveEditorInput.background": colors.fill.control.rest,
    "interactiveEditorInput.border": colors.stroke.control.default,
    "interactiveEditorInput.focusBorder": colors.stroke.focus.default,
    "interactiveEditorInput.placeholderForeground": colors.fill.text.sec,
  };
};
