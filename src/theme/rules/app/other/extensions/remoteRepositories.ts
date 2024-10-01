import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "remoteHub.decorations.addedForegroundColor": styles.basic.alt.green.pri,
    "remoteHub.decorations.conflictForegroundColor": styles.basic.def.orange.pri,
    "remoteHub.decorations.deletedForegroundColor": styles.basic.alt.red.pri,
    "remoteHub.decorations.ignoredResourceForeground": styles.fill.text.disabled,
    "remoteHub.decorations.incomingAddedForegroundColor": styles.basic.def.green.pri,
    "remoteHub.decorations.incomingDeletedForegroundColor": styles.basic.def.red.pri,
    "remoteHub.decorations.incomingModifiedForegroundColor": styles.basic.def.blue.pri,
    "remoteHub.decorations.incomingRenamedForegroundColor": styles.basic.def.yellow.pri,
    "remoteHub.decorations.modifiedForegroundColor": styles.basic.alt.blue.pri,
    "remoteHub.decorations.possibleConflictForegroundColor": styles.basic.alt.orange.pri,
    "remoteHub.decorations.submoduleForegroundColor": styles.basic.def.mint.pri,
    "remoteHub.decorations.workspaceRepositoriesView.hasUncommittedChangesForegroundColor":
      styles.basic.alt.blue.pri,
  };
};
