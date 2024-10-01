import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "scmGraph.foreground1": styles.basic.def.green.pri,
    "scmGraph.foreground2": styles.basic.def.yellow.pri,
    "scmGraph.foreground3": styles.basic.def.orange.pri,
    "scmGraph.historyItemGroupBase": styles.basic.def.purple.pri,
    "scmGraph.historyItemGroupLocal": styles.basic.def.blue.pri,
    "scmGraph.historyItemGroupRemote": styles.basic.def.mint.pri,
    "scmGraph.historyItemHoverAdditionsForeground": styles.basic.def.green.pri,
    "scmGraph.historyItemHoverDeletionsForeground": styles.basic.def.red.pri,
    "scmGraph.historyItemHoverLabelForeground": styles.fill.textOnColor.pri,
  };
};
