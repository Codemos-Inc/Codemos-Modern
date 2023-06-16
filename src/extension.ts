import * as vscode from "vscode";
import * as theme from "./theme";
import { checkHex, contrastChecker } from "./util/color";

export enum ColorMode {
  dark = 0,
  light = 1,
}

export enum AdaptiveMode {
  none = 0,
  gentle = 15,
  aggressive = 25,
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("codemos-modern.theme", async () => {
      const colorModeStr = await vscode.window.showQuickPick(
        [
          { label: "Dark", description: "Color Mode" },
          { label: "Light", description: "Color Mode" },
        ],
        {
          title: "Codemos Modern 1/3",
          placeHolder: "Select a color mode",
          ignoreFocusOut: true,
        }
      );
      let colorMode: ColorMode;
      if (colorModeStr === undefined) {
        return;
      }
      switch (colorModeStr.label) {
        case "Dark":
          colorMode = ColorMode.dark;
          break;
        case "Light":
          colorMode = ColorMode.light;
          break;
        default:
          return;
      }
      const accentHex7 = await vscode.window.showInputBox({
        title: `Codemos Modern ${colorModeStr.label} 2/3`,
        prompt: "Accent color in hex color code (e.g., #60CDFF)",
        value: "#XXXXXX",
        valueSelection: [1, 7],
        ignoreFocusOut: true,
      });
      if (accentHex7 === undefined) {
        return;
      }
      const accentHex = accentHex7.substring(1);
      if (!checkHex(accentHex)) {
        await vscode.window.showErrorMessage("Invalid color code");
        return;
      }
      switch (colorMode) {
        case ColorMode.dark:
          if (!contrastChecker(accentHex, "000000")) {
            await vscode.window.showErrorMessage(
              "Accent color must have at least 4.5:1 contrast with black"
            );
            return;
          }
          break;
        case ColorMode.light:
          if (!contrastChecker(accentHex, "FFFFFF")) {
            await vscode.window.showErrorMessage(
              "Accent color must have at least 4.5:1 contrast with white"
            );
            return;
          }
          break;
        default:
          return;
      }
      const adaptiveModeStr = await vscode.window.showQuickPick(
        [
          { label: "None", description: "Adaptive Mode" },
          { label: "Gentle", description: "Adaptive Mode" },
          { label: "Aggressive", description: "Adaptive Mode" },
        ],
        {
          title: `Codemos Modern ${colorModeStr.label} 3/3`,
          placeHolder:
            "Select an adaptive mode (Intensity of the accent color adaptation)",
          ignoreFocusOut: true,
        }
      );
      let adaptiveMode: AdaptiveMode;
      if (adaptiveModeStr === undefined) {
        return;
      }
      switch (adaptiveModeStr.label) {
        case "None":
          adaptiveMode = AdaptiveMode.none;
          break;
        case "Gentle":
          adaptiveMode = AdaptiveMode.gentle;
          break;
        case "Aggressive":
          adaptiveMode = AdaptiveMode.aggressive;
          break;
        default:
          return;
      }
      await theme.createTheme(accentHex, colorMode, adaptiveMode);
      switch (colorMode) {
        case ColorMode.dark:
          await vscode.workspace
            .getConfiguration()
            .update(
              "workbench.colorTheme",
              "Codemos Modern (Dark)",
              vscode.ConfigurationTarget.Global
            );
          break;
        case ColorMode.light:
          await vscode.workspace
            .getConfiguration()
            .update(
              "workbench.colorTheme",
              "Codemos Modern (Light)",
              vscode.ConfigurationTarget.Global
            );
          break;
        default:
          return;
      }
      await vscode.window
        .showInformationMessage(
          "Your Codemos Modern is ready!",
          "Apply Codemos Modern"
        )
        .then((selectedAction) => {
          if (selectedAction === "Apply Codemos Modern") {
            vscode.commands.executeCommand("workbench.action.reloadWindow");
          }
        });
    })
  );
}
