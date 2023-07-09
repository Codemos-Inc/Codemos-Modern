import { ConfigurationTarget, workspace } from "vscode";
import { ThemeContext } from "../../../../@types";
import { splitHex9 } from "../../../../color/utils";

export const configureExtensionSettings = (
  themeContext: ThemeContext,
  toDefaults: boolean
) => {
  const iconColor = splitHex9(themeContext.styles.fill.accentText.pri)[0];
  const extensionSection = workspace.getConfiguration("material-icon-theme");
  extensionSection.update(
    `files.color`,
    toDefaults ? iconColor : undefined,
    ConfigurationTarget.Global
  );
  extensionSection.update(
    `folders.color`,
    toDefaults ? iconColor : undefined,
    ConfigurationTarget.Global
  );
};
