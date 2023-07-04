import { ThemeContext } from "../../../../../@types/theme";
import { transparent } from "../../../../../color";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "editor.snippetFinalTabstopHighlightBackground": transparent,
    "editor.snippetFinalTabstopHighlightBorder": colors.basic.def.blue.pri,
    "editor.snippetTabstopHighlightBackground": colors.basic.def.blue.qua,
    "editor.snippetTabstopHighlightBorder": colors.stroke.control.default,
  };
};
