import { RequestError } from "@octokit/request-error";
import { Octokit } from "@octokit/rest";
import { authentication } from "vscode";
import { OnlineResult } from "../@types";
import { setOctokit } from "../api";
import { RESPONSE_OK } from "../api/constants";
import { l10nT } from "../l10n";
import { GITHUB_AUTH_PROVIDER_ID } from "./constants";

export const authenticate = async (createIfNone: boolean): Promise<OnlineResult> => {
  const session = await authentication.getSession(GITHUB_AUTH_PROVIDER_ID, [], {
    createIfNone,
    silent: !createIfNone,
  });
  if (!session) {
    return {
      success: false,
      message: l10nT("notification.msg.authSessionNotFound"),
      data: null,
    };
  }
  const octokit = new Octokit({
    auth: session.accessToken,
  });
  return await octokit.rateLimit
    .get()
    .then(() => {
      setOctokit(octokit);
      return { success: true, message: RESPONSE_OK, data: null };
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 401:
          message = l10nT("notification.msg.apiUnauthorized");
          break;
        default:
          message = l10nT("notification.msg.networkError$status", [error.status]);
          break;
      }
      return { success: false, message: message, data: null };
    });
};
