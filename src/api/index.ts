import { RequestError } from "@octokit/request-error";
import { Octokit } from "@octokit/rest";
import { NetworkBoundResult } from "../@types";
import { l10nT } from "../l10n";
import { RESPONSE_OK } from "./constants";

let octokit = new Octokit({
  request: {
    fetch: require("node-fetch"),
  },
});

export const setOctokit = (newOctokit: Octokit) => {
  octokit = newOctokit;
};

export const checkIfRepoExists = async (
  owner: string,
  repo: string,
): Promise<NetworkBoundResult> => {
  return await octokit.repos
    .get({ owner, repo })
    .then((response) => {
      return {
        success: true,
        message: RESPONSE_OK,
        data: response.data,
      };
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 403:
          message = l10nT("ext.message.error.apiRateLimitExceeded");
          break;
        case 404:
          message = l10nT("ext.message.error.repoNotFound$id", [
            `${owner}/${repo}`,
          ]);
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

export const getLatestVersionTag = async (
  owner: string,
  repo: string,
): Promise<NetworkBoundResult> => {
  return await octokit.repos
    .getLatestRelease({ owner, repo })
    .then((response) => {
      return {
        success: true,
        message: RESPONSE_OK,
        data: response.data.tag_name,
      };
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 403:
          message = l10nT("ext.message.error.apiRateLimitExceeded");
          break;
        case 404:
          message = l10nT("ext.message.error.releaseNotFound$id", [
            `${owner}/${repo}`,
          ]);
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

export const getSingleContentFromRelease = async (
  owner: string,
  repo: string,
  path: string,
  ref: string,
): Promise<NetworkBoundResult> => {
  return await octokit.repos
    .getContent({
      owner,
      repo,
      path,
      ref,
    })
    .then((response) => {
      if (!Array.isArray(response.data)) {
        if (response.data.type === "file") {
          return {
            success: true,
            message: RESPONSE_OK,
            data: Buffer.from(
              response.data.content,
              response.data.encoding as BufferEncoding,
            ).toString(),
          };
        } else {
          return {
            success: false,
            message: l10nT("ext.notification.error.contentNotFile$path", [
              response.data.path,
            ]),
            data: null,
          };
        }
      } else {
        return {
          success: false,
          message: l10nT("ext.notification.error.contentNotFile$path", [path]),
          data: null,
        };
      }
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 403:
          message = l10nT("ext.message.error.apiRateLimitExceeded");
          break;
        case 404:
          message = l10nT("ext.notification.error.contentNotFound$path$id", [
            path,
            `${owner}/${repo}`,
          ]);
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
