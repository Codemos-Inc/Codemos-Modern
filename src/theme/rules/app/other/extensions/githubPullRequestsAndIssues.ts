import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "issues.closed": colors.basic.def.purple.pri,
    "issues.newIssueDecoration": colors.fill.text.ghost,
    "issues.open": colors.basic.def.green.pri,
    "pullRequests.closed": colors.basic.def.red.pri,
    "pullRequests.draft": colors.basic.neutral.qua,
    "pullRequests.merged": colors.basic.def.purple.pri,
    "pullRequests.notification": colors.basic.def.blue.pri,
    "pullRequests.open": colors.basic.def.green.pri,
  };
};
