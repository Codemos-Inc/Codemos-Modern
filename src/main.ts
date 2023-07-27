import {
  ConfigurationChangeEvent,
  ExtensionContext,
  commands,
  workspace,
} from "vscode";
import { Config, Variant } from "./@types";
import { configure } from "./extension/commands";
import { GLOBAL_STATE_MRV_KEY } from "./extension/constants";
import { UpdateReason } from "./extension/enums";
import { getThemePaths } from "./extension/helpers";
import { getStateObject, updateState } from "./extension/state";
import {
  getConfig,
  isUntouched,
  updateModern,
  updateSettings,
  verifyState,
} from "./extension/utils";

export const activate = (extensionContext: ExtensionContext) => {
  initiateSync(extensionContext);
  if (!verifyState()) {
    let updateReason: UpdateReason;
    if (isUntouched()) {
      const mostRecentVersion =
        extensionContext.globalState.get(GLOBAL_STATE_MRV_KEY);
      if (!mostRecentVersion) {
        updateReason = UpdateReason.FIRST_INSTALL;
      } else if (
        mostRecentVersion === extensionContext.extension.packageJSON.version
      ) {
        updateReason = UpdateReason.REINSTALL;
      } else {
        updateReason = UpdateReason.UPDATE;
      }
    } else {
      updateReason = UpdateReason.PROFILE_CHANGE;
    }
    const config = getConfig();
    updateStateBridge(config);
    updateModernBridge(extensionContext, config, updateReason);
  }
  workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
    if (event.affectsConfiguration("codemosModern.auxiliaryThemeRegistries")) {
      const config = getConfig();
      updateStateBridge(config);
      updateModernBridge(extensionContext, config, UpdateReason.CONFIG_CHANGE);
    } else if (event.affectsConfiguration("codemosModern.dark")) {
      const config = getConfig();
      updateStateBridge(config);
      updateModernBridge(extensionContext, config, UpdateReason.CONFIG_CHANGE);
    } else if (event.affectsConfiguration("codemosModern.light")) {
      const config = getConfig();
      updateStateBridge(config);
      updateModernBridge(extensionContext, config, UpdateReason.CONFIG_CHANGE);
    } else if (event.affectsConfiguration("workbench.colorTheme")) {
      updateSettings(getConfig(), getActiveVariant());
    }
  });
  extensionContext.subscriptions.push(
    commands.registerCommand("codemosModern.configure", configure),
  );
};

const initiateSync = (extensionContext: ExtensionContext) => {
  extensionContext.globalState.setKeysForSync([GLOBAL_STATE_MRV_KEY]);
};

const updateStateBridge = (config: Config) => {
  const stateObject = getStateObject();
  stateObject.config = config;
  if (stateObject.isUntouched) {
    stateObject.isUntouched = false;
  }
  updateState(stateObject);
};

const updateModernBridge = (
  extensionContext: ExtensionContext,
  config: Config,
  updateReason: UpdateReason,
) => {
  extensionContext.globalState.update(
    GLOBAL_STATE_MRV_KEY,
    extensionContext.extension.packageJSON.version,
  );
  updateModern(config, getThemePaths(), updateReason, getActiveVariant());
};

const getActiveVariant = (): Variant | undefined => {
  const activeColorTheme = workspace
    .getConfiguration("workbench")
    .get("colorTheme");
  switch (activeColorTheme) {
    case "Codemos Modern (Dark)":
      return "dark";
    case "Codemos Modern (Light)":
      return "light";
    default:
      return undefined;
  }
};

export const deactivate = () => {};
