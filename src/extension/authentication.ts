import { RequestError } from "@octokit/request-error";
import { Octokit } from "@octokit/rest";
import { authentication } from "vscode";
import { setOctokit } from "../api";
import { apiUnauthorized, networkErrorMessage } from "../api/messages";
import { GITHUB_AUTH_PROVIDER_ID } from "./constants";

export const authenticate = async (createIfNone: boolean) => {
  const session = await authentication.getSession(GITHUB_AUTH_PROVIDER_ID, [], {
    createIfNone,
  });
  if (!session) {
    return { success: false, message: null, data: null };
  }
  const octokit = new Octokit({
    auth: session.accessToken,
    request: {
      fetch: require("node-fetch"),
    },
  });
  return await octokit.rateLimit
    .get()
    .then(() => {
      setOctokit(octokit);
      return { success: true, message: null, data: null };
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 401:
          message = apiUnauthorized();
          break;
        default:
          message = networkErrorMessage(error.status);
          break;
      }
      return { success: false, message: message, data: null };
    });
};
