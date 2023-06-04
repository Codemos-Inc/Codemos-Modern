import * as vscode from "vscode";
import * as theme from "./theme";

type RGB = [number, number, number];

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "codemos-modern.theme",
      async () => {
        const dayNight = await vscode.window.showQuickPick(
          [
            { label: "Dark", description: "Color Theme" },
            { label: "Light", description: "Color Theme" },
          ],
          {
            title: "Codemos Modern 1/2",
            placeHolder: "Select a color mode",
            ignoreFocusOut: true,
          }
        );
        if (dayNight === undefined) {
          return;
        }

        const hex7 = await vscode.window.showInputBox({
          title: "Codemos Modern 2/2",
          prompt: "Accent color in HEX color code (e.g., #60CDFF)",
          value: "#XXXXXX",
          valueSelection: [1, 7],
          ignoreFocusOut: true,
        });
        if (hex7 === undefined) {
          return;
        }

        const hex6 = hex7.substring(1);
        var hexRegex = /[0-9A-Fa-f]{6}/g;
        if (!hex6.match(hexRegex)) {
          await vscode.window.showErrorMessage("Invalid color code");
          return;
        }

        if (dayNight.label === "Dark") {
          if (contrastChecker(hex6, "Dark")) {
            await theme.createTheme(hex6, true);
            await vscode.workspace.getConfiguration()
              .update("workbench.colorTheme", "Codemos Modern (Dark)");
          } else {
            await vscode.window.showErrorMessage(
              "Accent color must have at least 4.5:1 contrast with black"
            );
            return;
          }
        } else {
          if (contrastChecker(hex6, "Light")) {
            await theme.createTheme(hex6, false);
            await vscode.workspace.getConfiguration()
              .update("workbench.colorTheme", "Codemos Modern (Light)");
          } else {
            await vscode.window.showErrorMessage(
              "Accent color must have at least 4.5:1 contrast with white"
            );
            return;
          }
        }
      }
    )
  );
}

function contrastChecker(hex6: string, colorMode: string): boolean {
  const fgRGB = getRgbColorFromHex(hex6);
  let bgRGB: RGB;
  if (colorMode === "Dark") {
    bgRGB = [0, 0, 0];
  } else {
    bgRGB = [255, 255, 255];
  }
  const contrastRatio = contrast(fgRGB, bgRGB);
  return contrastRatio < 1 / 4.5;
}

function getRgbColorFromHex(hex: string): RGB {
  const value = parseInt(hex, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return [r, g, b] as RGB;
}

function contrast(foregroundColor: RGB, backgroundColor: RGB): number {
  const foregroundLumiance = luminance(foregroundColor);
  const backgroundLuminance = luminance(backgroundColor);
  return backgroundLuminance < foregroundLumiance
    ? (backgroundLuminance + 0.05) / (foregroundLumiance + 0.05)
    : (foregroundLumiance + 0.05) / (backgroundLuminance + 0.05);
}

function luminance(rgb: RGB): number {
  const [r, g, b] = rgb.map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
}

export function deactivate() {}
