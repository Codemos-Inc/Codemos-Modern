import { ConfigurationTarget, workspace } from "vscode";
import { ThemeContext } from "../../../../@types";
import { splitHex9 } from "../../../../color/utils";

export const configureExtensionSettings = (
  themeContext: ThemeContext | null,
) => {
  const extensionSection = workspace.getConfiguration("material-icon-theme");
  if (themeContext) {
    const iconColor = splitHex9(themeContext.styles.fill.accent.pri)[0];
    extensionSection.update(
      `files.color`,
      iconColor,
      ConfigurationTarget.Global,
    );
    extensionSection.update(
      `folders.color`,
      iconColor,
      ConfigurationTarget.Global,
    );
  } else {
    extensionSection.update(
      `files.color`,
      undefined,
      ConfigurationTarget.Global,
    );
    extensionSection.update(
      `folders.color`,
      undefined,
      ConfigurationTarget.Global,
    );
  }
};
