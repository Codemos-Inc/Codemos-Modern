import { RequestError } from "@octokit/request-error";
import { Octokit } from "@octokit/rest";
import { GetResponseTypeFromEndpointMethod } from "@octokit/types";
import { OnlineResult } from "../@types";
import { l10nT } from "../l10n";
import { RESPONSE_OK } from "./constants";

let octokit = new Octokit();

export const getOctokit = (): Octokit => {
  return octokit;
};

export const setOctokit = (newOctokit: Octokit) => {
  octokit = newOctokit;
};

export const checkRepo = async (owner: string, repo: string): Promise<OnlineResult> => {
  return await octokit
    .request("HEAD /repos/{owner}/{repo}", { owner, repo })
    .then((): OnlineResult => {
      return {
        success: true,
        message: RESPONSE_OK,
        data: null,
      };
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 403:
          message = l10nT("notification.msg.apiRateLimit");
          break;
        case 404:
          message = l10nT("notification.msg.repoNotFound$id", [`${owner}/${repo}`]);
          break;
        default:
          message = l10nT("notification.msg.networkError$status", [error.status]);
          break;
      }
      return { success: false, message: message, data: null };
    });
};

export const getLatestVerTag = async (owner: string, repo: string): Promise<OnlineResult> => {
  type GetLatestReleaseType = GetResponseTypeFromEndpointMethod<
    typeof octokit.repos.getLatestRelease
  >;
  return await octokit.repos
    .getLatestRelease({ owner, repo })
    .then((response: GetLatestReleaseType) => {
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
          message = l10nT("notification.msg.apiRateLimit");
          break;
        case 404:
          message = l10nT("notification.msg.releaseNotFound$id", [`${owner}/${repo}`]);
          break;
        default:
          message = l10nT("notification.msg.networkError$status", [error.status]);
          break;
      }
      return { success: false, message: message, data: null };
    });
};

export const getContentFromRelease = async (
  owner: string,
  repo: string,
  path: string,
  ref: string,
): Promise<OnlineResult> => {
  type GetContentType = GetResponseTypeFromEndpointMethod<typeof octokit.repos.getContent>;
  return await octokit.repos
    .getContent({
      owner,
      repo,
      path,
      ref,
    })
    .then((response: GetContentType) => {
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
            message: l10nT("notification.msg.contentNotFile$path", [response.data.path]),
            data: null,
          };
        }
      } else {
        return {
          success: false,
          message: l10nT("notification.msg.contentNotFile$path", [path]),
          data: null,
        };
      }
    })
    .catch((error: RequestError) => {
      let message: string;
      switch (error.status) {
        case 403:
          message = l10nT("notification.msg.apiRateLimit");
          break;
        case 404:
          message = l10nT("notification.msg.contentNotFound$path$id", [path, `${owner}/${repo}`]);
          break;
        default:
          message = l10nT("notification.msg.networkError$status", [error.status]);
          break;
      }
      return { success: false, message: message, data: null };
    });
};
