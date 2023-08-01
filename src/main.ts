import {
  ConfigurationChangeEvent,
  ExtensionContext,
  commands,
  workspace,
} from "vscode";
import { Config, Variant } from "./@types";
import { authenticate } from "./extension/authentication";
import { authenticateCommand, configureCommand } from "./extension/commands";
import { GLOBAL_STATE_MRV_KEY } from "./extension/constants";
import { UpdateReason } from "./extension/enums";
import { getThemePaths } from "./extension/helpers";
import { setIsConfiguredFromCommand } from "./extension/sharedState";
import { getStateObject, updateState } from "./extension/state";
import {
  getConfig,
  isUntouched,
  updateModern,
  updateSettings,
  verifyState,
} from "./extension/utils";

export const activate = async (extensionContext: ExtensionContext) => {
  await authenticate(false);
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
    await updateModernBridge(extensionContext, "all", updateReason, config);
    updateStateBridge(config);
  }
  workspace.onDidChangeConfiguration(
    async (event: ConfigurationChangeEvent) => {
      if (
        event.affectsConfiguration("codemosModern.auxiliaryThemeRegistries")
      ) {
        const config = getConfig();
        if (!verifyState(config)) {
          await updateModernBridge(
            extensionContext,
            "none",
            UpdateReason.CONFIG_CHANGE,
            config,
          );
          updateStateBridge(config);
        }
      } else if (event.affectsConfiguration("codemosModern.dark")) {
        const config = getConfig();
        if (!verifyState(config)) {
          await updateModernBridge(
            extensionContext,
            "dark",
            UpdateReason.CONFIG_CHANGE,
            config,
          );
          updateStateBridge(config);
        }
      } else if (event.affectsConfiguration("codemosModern.light")) {
        const config = getConfig();
        if (!verifyState(config)) {
          await updateModernBridge(
            extensionContext,
            "light",
            UpdateReason.CONFIG_CHANGE,
            config,
          );
          updateStateBridge(config);
        }
      } else if (event.affectsConfiguration("workbench.colorTheme")) {
        updateSettings(getConfig(), getActiveVariant());
      }
    },
  );
  extensionContext.subscriptions.push(
    commands.registerCommand("codemosModern.authenticate", authenticateCommand),
  );
  extensionContext.subscriptions.push(
    commands.registerCommand("codemosModern.configure", configureCommand),
  );
};

const initiateSync = (extensionContext: ExtensionContext) => {
  extensionContext.globalState.setKeysForSync([GLOBAL_STATE_MRV_KEY]);
};

const updateModernBridge = async (
  extensionContext: ExtensionContext,
  updateTarget: "none" | "all" | Variant,
  updateReason: UpdateReason,
  config: Config,
) => {
  extensionContext.globalState.update(
    GLOBAL_STATE_MRV_KEY,
    extensionContext.extension.packageJSON.version,
  );
  setIsConfiguredFromCommand(false);
  await updateModern(
    updateTarget,
    updateReason,
    config,
    getThemePaths(),
    getActiveVariant(),
  );
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

const updateStateBridge = (config: Config) => {
  const stateObject = getStateObject();
  stateObject.config = config;
  if (stateObject.isUntouched) {
    stateObject.isUntouched = false;
  }
  updateState(stateObject);
};

export const deactivate = () => {};
