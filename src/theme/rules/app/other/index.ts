import { ThemeContext } from "../../../../@types";
import { getRules as getErrorLensRules } from "./extensions/errorLens";
import { getRules as getGitLensRules } from "./extensions/gitLens";
import { getRules as getGithubPullRequestsAndIssuesRules } from "./extensions/githubPullRequestsAndIssues";
import { getRules as getRemoteRepositoriesRules } from "./extensions/remoteRepositories";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    ...getErrorLensRules(themeContext),
    ...getGithubPullRequestsAndIssuesRules(themeContext),
    ...getGitLensRules(themeContext),
    ...getRemoteRepositoriesRules(themeContext),
  };
};
