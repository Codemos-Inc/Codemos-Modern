import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "remoteHub.decorations.addedForegroundColor": colors.basic.alt.green.pri,
    "remoteHub.decorations.conflictForegroundColor": colors.basic.def.orange.pri,
    "remoteHub.decorations.deletedForegroundColor": colors.basic.alt.red.pri,
    "remoteHub.decorations.ignoredResourceForeground": colors.fill.text.disabled,
    "remoteHub.decorations.modifiedForegroundColor": colors.basic.alt.blue.pri,
    "remoteHub.decorations.incomingAddedForegroundColor": colors.basic.def.green.pri,
    "remoteHub.decorations.incomingDeletedForegroundColor": colors.basic.def.red.pri,
    "remoteHub.decorations.incomingModifiedForegroundColor": colors.basic.def.blue.pri,
    "remoteHub.decorations.incomingRenamedForegroundColor": colors.basic.def.yellow.pri,
    "remoteHub.decorations.possibleConflictForegroundColor": colors.basic.alt.orange.pri,
    "remoteHub.decorations.submoduleForegroundColor": colors.basic.def.mint.pri,
    "remoteHub.decorations.workspaceRepositoriesView.hasUncommittedChangesForegroundColor":
      colors.basic.alt.blue.pri,
  };
};
