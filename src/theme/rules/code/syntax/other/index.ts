import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    ...getDartRules(themeContext),
    ...getErrorLensRules(themeContext),
    ...getGithubPullRequestsAndIssuesRules(themeContext),
    ...getGitLensRules(themeContext),
    ...getRemoteRepositoriesRules(themeContext),
    ...getRustAnalyzerRules(themeContext),
  };
};
