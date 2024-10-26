import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "gitDecoration.addedResourceForeground": styles.basic.def.green.pri,
    "gitDecoration.conflictingResourceForeground": styles.basic.def.orange.pri,
    "gitDecoration.deletedResourceForeground": styles.basic.alt.red.pri,
    "gitDecoration.ignoredResourceForeground": styles.fill.text.disabled,
    "gitDecoration.modifiedResourceForeground": styles.basic.alt.blue.pri,
    "gitDecoration.renamedResourceForeground": styles.basic.def.yellow.pri,
    "gitDecoration.stageDeletedResourceForeground": styles.basic.def.red.pri,
    "gitDecoration.stageModifiedResourceForeground": styles.basic.def.blue.pri,
    "gitDecoration.submoduleResourceForeground": styles.basic.def.mint.pri,
    "gitDecoration.untrackedResourceForeground": styles.basic.alt.green.pri,
  };
};
