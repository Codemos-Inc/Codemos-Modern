import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "editor.snippetTabstopHighlightBackground": colors.basic.def.blue.qua,
    "editor.snippetTabstopHighlightBorder": colors.stroke.control.default,
    "editor.snippetFinalTabstopHighlightBackground": TRANSPARENT,
    "editor.snippetFinalTabstopHighlightBorder": colors.basic.def.blue.pri,
  };
};
