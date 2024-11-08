import { l10nT } from "../l10n";

export enum UpdateReason {
  CONFIG_CHANGE,
  FIRST_INSTALL,
  MAJOR_UPDATE,
  MINOR_UPDATE,
  PATCH_UPDATE,
  REINSTALL,
  PROFILE_CHANGE,
}

export type UpdateMessages = {
  [key in UpdateReason]: string;
};

export const updateMessages: UpdateMessages = {
  [UpdateReason.CONFIG_CHANGE]: l10nT("notification.update.configChange"),
  [UpdateReason.FIRST_INSTALL]: l10nT("notification.update.firstInstall"),
  [UpdateReason.MAJOR_UPDATE]: l10nT("notification.update.majorUpdate"),
  [UpdateReason.MINOR_UPDATE]: l10nT("notification.update.minorUpdate"),
  [UpdateReason.PATCH_UPDATE]: l10nT("notification.update.patchUpdate"),
  [UpdateReason.REINSTALL]: l10nT("notification.update.reinstall"),
  [UpdateReason.PROFILE_CHANGE]: l10nT("notification.update.profileChange"),
};
