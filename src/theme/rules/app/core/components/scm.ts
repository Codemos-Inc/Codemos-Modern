import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "scm.historyItemAdditionsForeground": colors.basic.def.green.pri,
    "scm.historyItemDeletionsForeground": colors.basic.def.red.pri,
    "scm.historyItemStatisticsBorder": colors.stroke.control.default,
    "scm.historyItemSelectedStatisticsBorder": colors.stroke.focus.default,
  };
};
