// Success messages

export const repositoryObtainedMessage = (repoId: string): string => {
  return `Obtained repository "${repoId}".`;
};

export const latestVersionTagObtainedMessage = (
  repoId: string,
  tagName: string,
): string => {
  return `Obtained latest version "${tagName}" for "${repoId}".`;
};

export const latestVersionIndexedMessage = (
  repoId: string,
  tagName: string,
): string => {
  return `Indexed version "${tagName}" of "${repoId}".`;
};

// Error messages

export const networkErrorMessage = (status: number): string => {
  return `Network error occurred (code "${status}")! Please contact with Codemos.`;
};

export const apiRateLimitExceeded = (): string => {
  return `API rate limit exceeded! Use "Codemos Modern: Authenticate 🔗" to increase your limit.`;
};

export const repoNotFoundMessage = (repoId: string): string => {
  return `Repository "${repoId}" not found! Verify that repository exists and is public.`;
};

export const releaseNotFoundMessage = (repoId: string): string => {
  return `Latest release for "${repoId}" not found! Verify that repository has at least one release.`;
};

export const contentNotFileMessage = (path: string): string => {
  return `Content at "${path}" is not a file! Please contact with Codemos.`;
};

export const apiUnauthorized = () => {
  return `Authentication failed. Please try again.`;
};

export const contentNotFoundMessage = (
  repoId: string,
  path: string,
): string => {
  return `Path "${path}" in repository "${repoId}" is not valid! Verify that path exists and is accessible.`;
};
