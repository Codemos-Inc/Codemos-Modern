import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "scm.historyItemAdditionsForeground": styles.basic.def.green.pri,
    "scm.historyItemDeletionsForeground": styles.basic.def.red.pri,
    "scm.historyItemSelectedStatisticsBorder": styles.stroke.focus.default,
    "scm.historyItemStatisticsBorder": styles.stroke.control.default,
  };
};
