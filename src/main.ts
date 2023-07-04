import {
  ConfigurationChangeEvent,
  ExtensionContext,
  commands,
  workspace,
} from "vscode";
import { configure } from "./extension/commands";
import { UpdateReason } from "./extension/enums";
import { getThemePaths } from "./extension/helpers";
import {
  getConfig,
  isDefaultConfig,
  isFreshInstall,
  updateThemes,
} from "./extension/utils";

export const activate = (context: ExtensionContext) => {
  if (isFreshInstall() && !isDefaultConfig()) {
    updateThemes(getConfig(), getThemePaths(), UpdateReason.FRESH_INSTALL);
  }
  workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
    if (event.affectsConfiguration("codemosModern")) {
      updateThemes(getConfig(), getThemePaths(), UpdateReason.CONFIG_CHANGE);
    }
  });
  context.subscriptions.push(
    commands.registerCommand("codemosModern.configure", configure)
  );
};

export const deactivate = () => {};
