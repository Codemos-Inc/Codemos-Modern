import { ConfigurationChangeEvent, ExtensionContext, commands, workspace } from "vscode";
import type { Variant } from "./@types";
import { authenticate } from "./extension/authentication";
import { authenticateCommand } from "./extension/commands/authenticate";
import { configureCommand } from "./extension/commands/configure";
import { GLOBAL_STATE_MRV_KEY } from "./extension/constants";
import { getThemePaths } from "./extension/helpers";
import { UpdateReason, updateMessages } from "./extension/messages";
import { showInfoNotification } from "./extension/notifications";
import { getIsConfiguredFromCmd } from "./extension/shared";
import { getStateObj, updateState } from "./extension/state";
import {
  getActiveVariant,
  getConfig,
  isUntouched,
  updateModern,
  updateSettings,
  verifyState,
} from "./extension/utils";

export const activate = async (extensionContext: ExtensionContext) => {
  extensionContext.subscriptions.push(
    commands.registerCommand("codemosModern.authenticate", authenticateCommand),
  );
  extensionContext.subscriptions.push(
    commands.registerCommand("codemosModern.configure", configureCommand),
  );
  await onStart(extensionContext);
  workspace.onDidChangeConfiguration(async (event: ConfigurationChangeEvent) => {
    if (event.affectsConfiguration("codemosModern.auxiliaryThemeRegistries")) {
      await updateBridge("none", UpdateReason.CONFIG_CHANGE);
    } else if (event.affectsConfiguration("codemosModern.textDecorations")) {
      await updateBridge("all", UpdateReason.CONFIG_CHANGE);
    } else if (event.affectsConfiguration("codemosModern.dark")) {
      if (!getIsConfiguredFromCmd()) {
        await updateBridge("dark", UpdateReason.CONFIG_CHANGE);
      }
    } else if (event.affectsConfiguration("codemosModern.light")) {
      if (!getIsConfiguredFromCmd()) {
        await updateBridge("light", UpdateReason.CONFIG_CHANGE);
      }
    } else if (
      event.affectsConfiguration("workbench.colorTheme") ||
      event.affectsConfiguration("workbench.preferredDarkColorTheme") ||
      event.affectsConfiguration("workbench.preferredLightColorTheme")
    ) {
      updateSettings(getConfig(), getActiveVariant());
    }
  });
};

export const updateBridge = async (
  updateTarget: "none" | "all" | Variant,
  updateReason: UpdateReason,
) => {
  const config = getConfig();
  if (!verifyState(config)) {
    await updateModern(updateTarget, updateReason, config, getThemePaths(), getActiveVariant());
    const stateObj = getStateObj();
    if (stateObj.isUntouched) {
      stateObj.isUntouched = false;
    }
    stateObj.config = config;
    updateState(stateObj);
  }
};

export const deactivate = () => {};

const onStart = async (extensionContext: ExtensionContext) => {
  await authenticate(false);
  extensionContext.globalState.setKeysForSync([GLOBAL_STATE_MRV_KEY]);
  const mostRecentVersion = extensionContext.globalState.get(GLOBAL_STATE_MRV_KEY) as string;
  if (!mostRecentVersion || mostRecentVersion !== extensionContext.extension.packageJSON.version) {
    extensionContext.globalState.update(
      GLOBAL_STATE_MRV_KEY,
      extensionContext.extension.packageJSON.version,
    );
  }
  if (!mostRecentVersion) {
    firstInstallExperience();
    return;
  }
  // If themes need to be updated
  if (!verifyState()) {
    let updateReason: UpdateReason;
    if (isUntouched()) {
      // Reinstall
      if (mostRecentVersion === extensionContext.extension.packageJSON.version) {
        updateReason = UpdateReason.REINSTALL;
      }
      // Major, minor, or patch update
      else {
        const mostRecentVersionParts = mostRecentVersion.split(".");
        const currentVersionParts = extensionContext.extension.packageJSON.version.split(".");
        if (mostRecentVersionParts[0] !== currentVersionParts[0]) {
          updateReason = UpdateReason.MAJOR_UPDATE;
        } else if (mostRecentVersionParts[1] !== currentVersionParts[1]) {
          updateReason = UpdateReason.MINOR_UPDATE;
        } else {
          updateReason = UpdateReason.PATCH_UPDATE;
        }
      }
    }
    // Profile change
    else {
      updateReason = UpdateReason.PROFILE_CHANGE;
    }
    await updateBridge("all", updateReason);
  }
};

const firstInstallExperience = () => {
  commands.executeCommand("codemosModern.configure");
  showInfoNotification(updateMessages[UpdateReason.FIRST_INSTALL], null, null);
};
