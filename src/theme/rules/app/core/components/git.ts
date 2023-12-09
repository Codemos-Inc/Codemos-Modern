import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "gitDecoration.addedResourceForeground": colors.basic.def.green.pri,
    "gitDecoration.modifiedResourceForeground": colors.basic.alt.blue.pri,
    "gitDecoration.deletedResourceForeground": colors.basic.alt.red.pri,
    "gitDecoration.renamedResourceForeground": colors.basic.def.yellow.pri,
    "gitDecoration.stageModifiedResourceForeground": colors.basic.def.blue.pri,
    "gitDecoration.stageDeletedResourceForeground": colors.basic.def.red.pri,
    "gitDecoration.untrackedResourceForeground": colors.basic.alt.green.pri,
    "gitDecoration.ignoredResourceForeground": colors.fill.text.disabled,
    "gitDecoration.conflictingResourceForeground": colors.basic.def.orange.pri,
    "gitDecoration.submoduleResourceForeground": colors.basic.def.mint.pri,
  };
};
