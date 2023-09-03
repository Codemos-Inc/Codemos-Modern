import {
  ConfigurationChangeEvent,
  ExtensionContext,
  commands,
  workspace,
} from "vscode";
import { Variant } from "./@types";
import { authenticate } from "./extension/authentication";
import { authenticateCommand, configureCommand } from "./extension/commands";
import { GLOBAL_STATE_MRV_KEY } from "./extension/constants";
import { UpdateReason } from "./extension/enums";
import { getThemePaths } from "./extension/helpers";
import { getIsConfiguredFromCommand } from "./extension/sharedState";
import { getStateObject, updateState } from "./extension/state";
import {
  getConfig,
  isUntouched,
  updateModern,
  updateSettings,
  verifyState,
} from "./extension/utils";

export const activate = async (extensionContext: ExtensionContext) => {
  await onStart(extensionContext);
  workspace.onDidChangeConfiguration(
    async (event: ConfigurationChangeEvent) => {
      if (
        event.affectsConfiguration("codemosModern.auxiliaryThemeRegistries")
      ) {
        await updateBridge("none", UpdateReason.CONFIG_CHANGE);
      } else if (event.affectsConfiguration("codemosModern.dark")) {
        if (!getIsConfiguredFromCommand()) {
          await updateBridge("dark", UpdateReason.CONFIG_CHANGE);
        }
      } else if (event.affectsConfiguration("codemosModern.light")) {
        if (!getIsConfiguredFromCommand()) {
          await updateBridge("light", UpdateReason.CONFIG_CHANGE);
        }
      } else if (event.affectsConfiguration("workbench.colorTheme")) {
        await updateSettings(getConfig(), getActiveVariant());
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

const onStart = async (extensionContext: ExtensionContext) => {
  await authenticate(false);
  extensionContext.globalState.setKeysForSync([GLOBAL_STATE_MRV_KEY]);
  const mostRecentVersion = extensionContext.globalState.get(
    GLOBAL_STATE_MRV_KEY,
  ) as string;
  if (
    !mostRecentVersion ||
    mostRecentVersion !== extensionContext.extension.packageJSON.version
  ) {
    extensionContext.globalState.update(
      GLOBAL_STATE_MRV_KEY,
      extensionContext.extension.packageJSON.version,
    );
  }
  if (!verifyState()) {
    let updateReason: UpdateReason;
    if (isUntouched()) {
      if (!mostRecentVersion) {
        updateReason = UpdateReason.FIRST_INSTALL;
      } else if (
        mostRecentVersion === extensionContext.extension.packageJSON.version
      ) {
        updateReason = UpdateReason.REINSTALL;
      } else {
        if (
          mostRecentVersion.charAt(0) !==
          extensionContext.extension.packageJSON.version.charAt(0)
        ) {
          updateReason = UpdateReason.MAJOR_UPDATE;
        } else {
          updateReason = UpdateReason.MINOR_UPDATE;
        }
      }
    } else {
      updateReason = UpdateReason.PROFILE_CHANGE;
    }
    await updateBridge("all", updateReason);
  }
};

export const updateBridge = async (
  updateTarget: "none" | "all" | Variant,
  updateReason: UpdateReason,
) => {
  const config = getConfig();
  if (!verifyState(config)) {
    await updateModern(
      updateTarget,
      updateReason,
      config,
      getThemePaths(),
      getActiveVariant(),
    );
    const stateObject = getStateObject();
    if (stateObject.isUntouched) {
      stateObject.isUntouched = false;
    }
    stateObject.config = config;
    updateState(stateObject);
  }
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
