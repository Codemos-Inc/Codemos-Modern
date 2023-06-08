import * as vscode from "vscode";
import * as theme from "./theme";
import { checkHEX, contrastChecker } from "./util/color";

export enum ColorMode {
  Dark = 0,
  Light = 1,
}

export enum AdaptiveMode {
  None = 0,
  Gentle = 15,
  Aggressive = 25,
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "codemos-modern.theme",
      async () => {
        const colorModeStr = await vscode.window.showQuickPick(
          [
            { label: "Dark", description: "Color Mode" },
            { label: "Light", description: "Color Mode" }
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
            colorMode = ColorMode.Dark;
            break;
          case "Light":
            colorMode = ColorMode.Light;
            break;
          default:
            return;
        }
        const accentHEX7 = await vscode.window.showInputBox({
          title: `Codemos Modern ${colorModeStr.label} 2/3`,
          prompt: "Accent color in HEX color code (e.g., #60CDFF)",
          value: "#XXXXXX",
          valueSelection: [1, 7],
          ignoreFocusOut: true,
        });
        if (accentHEX7 === undefined) {
          return;
        }
        const AccentHEX = accentHEX7.substring(1);
        if (!checkHEX(AccentHEX)) {
          await vscode.window.showErrorMessage("Invalid color code");
          return;
        }
        switch (colorMode) {
          case ColorMode.Dark:
            if (!contrastChecker(AccentHEX, "000000")) {
              await vscode.window.showErrorMessage(
                "Accent color must have at least 4.5:1 contrast with black"
              );
              return;
            }
            break;
          case ColorMode.Light:
            if (!contrastChecker(AccentHEX, "FFFFFF")) {
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
            { label: "Aggressive", description: "Adaptive Mode" }
          ],
          {
            title: `Codemos Modern ${colorModeStr.label} 3/3`,
            placeHolder: "Select an adaptive mode (Intensity of the accent color adaptation)",
            ignoreFocusOut: true,
          }
        );
        let adaptiveMode: AdaptiveMode;
        if (adaptiveModeStr === undefined) {
          return;
        }
        switch (adaptiveModeStr.label) {
          case "None":
            adaptiveMode = AdaptiveMode.None;
            break;
          case "Gentle":
            adaptiveMode = AdaptiveMode.Gentle;
            break;
          case "Aggressive":
            adaptiveMode = AdaptiveMode.Aggressive;
            break;
          default:
            return;
        }
        await theme.createTheme(AccentHEX, colorMode, adaptiveMode);
        switch (colorMode) {
          case ColorMode.Dark:
            await vscode.workspace.getConfiguration()
              .update("workbench.colorTheme", "Codemos Modern (Dark)");
          case ColorMode.Light:
            await vscode.workspace.getConfiguration()
              .update("workbench.colorTheme", "Codemos Modern (Light)");
            break;
          default:
            return;
        }
        await vscode.window.showInformationMessage(
          "Your Codemos Modern is ready!"
        );
      }
    )
  );
}