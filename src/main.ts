import {
  ColorThemeKind,
  ConfigurationChangeEvent,
  ExtensionContext,
  commands,
  window,
  workspace,
} from "vscode";
import { Variant } from "./@types";
import { authenticate } from "./extension/authentication";
import { authenticateCommand, configureCommand } from "./extension/commands";
import { GLOBAL_STATE_MRV_KEY } from "./extension/constants";
import { UpdateReason } from "./extension/enums";
import { getThemePaths } from "./extension/helpers";
import { showInformationNotification } from "./extension/notifications";
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
  extensionContext.subscriptions.push(
    commands.registerCommand("codemosModern.authenticate", authenticateCommand),
  );
  extensionContext.subscriptions.push(
    commands.registerCommand("codemosModern.configure", configureCommand),
  );
  await onStart(extensionContext);
  workspace.onDidChangeConfiguration(
    async (event: ConfigurationChangeEvent) => {
      if (
        event.affectsConfiguration("codemosModern.auxiliaryThemeRegistries")
      ) {
        await updateBridge("none", UpdateReason.CONFIG_CHANGE);
      } else if (event.affectsConfiguration("codemosModern.textDecorations")) {
        await updateBridge("all", UpdateReason.CONFIG_CHANGE);
      } else if (event.affectsConfiguration("codemosModern.dark")) {
        if (!getIsConfiguredFromCommand()) {
          await updateBridge("dark", UpdateReason.CONFIG_CHANGE);
        }
      } else if (event.affectsConfiguration("codemosModern.light")) {
        if (!getIsConfiguredFromCommand()) {
          await updateBridge("light", UpdateReason.CONFIG_CHANGE);
        }
      } else if (event.affectsConfiguration("workbench.colorTheme")) {
        updateSettings(getConfig(), await getActiveVariant());
      }
    },
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
  if (!mostRecentVersion) {
    firstInstallExperience();
  }
  if (!verifyState()) {
    let updateReason: UpdateReason;
    if (isUntouched()) {
      if (!mostRecentVersion) {
        updateReason = UpdateReason.FIRST_INSTALL;
        firstInstallExperience();
      } else if (
        mostRecentVersion === extensionContext.extension.packageJSON.version
      ) {
        updateReason = UpdateReason.REINSTALL;
      } else {
        const mostRecentVersionParts = mostRecentVersion.split(".");
        const currentVersionParts =
          extensionContext.extension.packageJSON.version.split(".");
        if (mostRecentVersionParts[0] !== currentVersionParts[0]) {
          updateReason = UpdateReason.MAJOR_UPDATE;
        } else if (mostRecentVersionParts[1] !== currentVersionParts[1]) {
          updateReason = UpdateReason.MINOR_UPDATE;
        } else {
          updateReason = UpdateReason.PATCH_UPDATE;
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
      await getActiveVariant(),
    );
    const stateObject = getStateObject();
    if (stateObject.isUntouched) {
      stateObject.isUntouched = false;
    }
    stateObject.config = config;
    updateState(stateObject);
  }
};

const getActiveVariant = async (): Promise<Variant | undefined> => {
  const activeColorTheme = await workspace
    .getConfiguration("workbench")
    .get("colorTheme");
  if (!activeColorTheme) {
    return undefined;
  }
  if (!(activeColorTheme as string).startsWith("Codemos Modern")) {
    return undefined;
  }
  const activeThemeKind = window.activeColorTheme.kind;
  switch (activeThemeKind) {
    case ColorThemeKind.Dark:
    case ColorThemeKind.HighContrast:
      return "dark";
    case ColorThemeKind.Light:
    case ColorThemeKind.HighContrastLight:
      return "light";
  }
};

const firstInstallExperience = () => {
  commands.executeCommand("codemosModern.configure");
  showInformationNotification(
    "Welcome to the innovative theme suite/hub! 👋 Start your journey by configuring Modern.",
    null,
    null,
  );
};

export const deactivate = () => {};
