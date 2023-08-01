import { RequestError } from "@octokit/request-error";
import { Octokit } from "@octokit/rest";
import { NetworkBoundResult } from "../@types";
import {
  apiRateLimitExceeded,
  contentNotFileMessage,
  contentNotFoundMessage,
  latestVersionIndexedMessage,
  latestVersionTagObtainedMessage,
  networkErrorMessage,
  releaseNotFoundMessage,
  repoNotFoundMessage,
  repositoryObtainedMessage,
} from "./messages";

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
        message: repositoryObtainedMessage(`${owner}/${repo}`),
        data: response.data,
      };
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 403:
          message = apiRateLimitExceeded();
          break;
        case 404:
          message = repoNotFoundMessage(`${owner}/${repo}`);
          break;
        default:
          message = networkErrorMessage(error.status);
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
        message: latestVersionTagObtainedMessage(
          `${owner}/${repo}`,
          response.data.tag_name,
        ),
        data: response.data.tag_name,
      };
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 403:
          message = apiRateLimitExceeded();
          break;
        case 404:
          message = releaseNotFoundMessage(`${owner}/${repo}`);
          break;
        default:
          message = networkErrorMessage(error.status);
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
      query: {
        ref,
      },
      owner,
      repo,
      path,
    })
    .then((response) => {
      if (!Array.isArray(response.data)) {
        if (response.data.type === "file") {
          return {
            success: true,
            message: latestVersionIndexedMessage(`${owner}/${repo}`, ref),
            data: Buffer.from(
              response.data.content,
              response.data.encoding as BufferEncoding,
            ).toString(),
          };
        } else {
          return {
            success: false,
            message: contentNotFileMessage(response.data.path),
            data: null,
          };
        }
      } else {
        return {
          success: false,
          message: contentNotFileMessage(path),
          data: null,
        };
      }
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 403:
          message = apiRateLimitExceeded();
          break;
        case 404:
          message = contentNotFoundMessage(`${owner}/${repo}`, path);
          break;
        default:
          message = networkErrorMessage(error.status);
          break;
      }
      return { success: false, message: message, data: null };
    });
};
