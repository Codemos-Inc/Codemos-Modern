import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "scmGraph.foreground1": styles.basic.def.green.pri,
    "scmGraph.foreground2": styles.basic.def.yellow.pri,
    "scmGraph.foreground3": styles.basic.def.orange.pri,
    "scmGraph.foreground4": styles.basic.def.red.pri,
    "scmGraph.foreground5": styles.basic.def.pink.pri,
    "scmGraph.historyItemBaseRefColor": styles.basic.def.purple.pri,
    "scmGraph.historyItemHoverAdditionsForeground": styles.basic.def.green.pri,
    "scmGraph.historyItemHoverDefaultLabelBackground": styles.fill.control.prominent,
    "scmGraph.historyItemHoverDefaultLabelForeground": styles.fill.text.sec,
    "scmGraph.historyItemHoverDeletionsForeground": styles.basic.def.red.pri,
    "scmGraph.historyItemHoverLabelForeground": styles.fill.textOnColor.pri,
    "scmGraph.historyItemRefColor": styles.basic.def.blue.pri,
    "scmGraph.historyItemRemoteRefColor": styles.basic.def.mint.pri,
  };
};
