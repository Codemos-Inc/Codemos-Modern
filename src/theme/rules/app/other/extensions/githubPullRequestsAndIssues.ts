import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "issues.closed": styles.basic.def.purple.pri,
    "issues.newIssueDecoration": styles.fill.text.ghost,
    "issues.open": styles.basic.def.green.pri,
    "pullRequests.closed": styles.basic.def.red.pri,
    "pullRequests.draft": styles.basic.neutral.qua,
    "pullRequests.merged": styles.basic.def.purple.pri,
    "pullRequests.notification": styles.basic.def.blue.pri,
    "pullRequests.open": styles.basic.def.green.pri,
  };
};
