import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "editor.snippetFinalTabstopHighlightBackground": TRANSPARENT,
    "editor.snippetFinalTabstopHighlightBorder": styles.basic.def.blue.pri,
    "editor.snippetTabstopHighlightBackground": styles.basic.def.blue.qua,
    "editor.snippetTabstopHighlightBorder": styles.stroke.control.default,
  };
};
