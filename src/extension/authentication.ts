import { RequestError } from "@octokit/request-error";
import { Octokit } from "@octokit/rest";
import { authentication } from "vscode";
import { NetworkBoundResult } from "../@types";
import { setOctokit } from "../api";
import { RESPONSE_OK } from "../api/constants";
import { l10nT } from "../l10n";
import { GITHUB_AUTH_PROVIDER_ID } from "./constants";

export const authenticate = async (
  createIfNone: boolean,
): Promise<NetworkBoundResult> => {
  const session = await authentication.getSession(GITHUB_AUTH_PROVIDER_ID, [], {
    createIfNone,
  });
  if (!session) {
    return {
      success: false,
      message: l10nT("ext.message.error.authSessionNotFound"),
      data: null,
    };
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
      return { success: true, message: RESPONSE_OK, data: null };
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 401:
          message = l10nT("ext.message.error.apiUnauthorized");
          break;
        default:
          message = l10nT("ext.message.error.networkError$status", [
            error.status,
          ]);
          break;
      }
      return { success: false, message: message, data: null };
    });
};
