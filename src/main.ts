import {
  ConfigurationChangeEvent,
  ExtensionContext,
  commands,
  workspace,
} from "vscode";
import { Config, Variant } from "./@types";
import { configure } from "./extension/commands";
import { UpdateReason } from "./extension/enums";
import { getThemePaths } from "./extension/helpers";
import { getStateObject, updateState } from "./extension/state";
import {
  getConfig,
  isUntouched,
  updateThemeConfigs,
  updateThemes,
  verifyState,
} from "./extension/utils";

export const activate = (extensionContext: ExtensionContext) => {
  if (!verifyState()) {
    let updateReason: UpdateReason;
    if (isUntouched()) {
      const mostRecentVersion =
        extensionContext.globalState.get("mostRecentVersion");
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
    updateThemesBridge(extensionContext, config, updateReason);
  }
  workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
    if (event.affectsConfiguration("codemosModern")) {
      const config = getConfig();
      updateStateBridge(config);
      updateThemesBridge(extensionContext, config, UpdateReason.CONFIG_CHANGE);
    }
    if (event.affectsConfiguration("workbench.colorTheme")) {
      updateThemeConfigs(getConfig(), getActiveColorTheme());
    }
  });
  extensionContext.subscriptions.push(
    commands.registerCommand("codemosModern.configure", configure)
  );
};

const updateStateBridge = (config: Config) => {
  const stateObject = getStateObject();
  stateObject.config = config;
  if (stateObject.isUntouched) {
    stateObject.isUntouched = false;
  }
  updateState(stateObject);
};

const updateThemesBridge = (
  extensionContext: ExtensionContext,
  config: Config,
  updateReason: UpdateReason
) => {
  extensionContext.globalState.update(
    "mostRecentVersion",
    extensionContext.extension.packageJSON.version
  );
  updateThemes(config, getThemePaths(), updateReason, getActiveColorTheme());
};

const getActiveColorTheme = (): Variant | undefined => {
  const activeColorThemeConf = workspace
    .getConfiguration("workbench")
    .get("colorTheme");
  switch (activeColorThemeConf) {
    case "Codemos Modern (Dark)":
      return "dark";
    case "Codemos Modern (Light)":
      return "light";
    default:
      return undefined;
  }
};

export const deactivate = () => {};
