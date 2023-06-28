import * as vscode from "vscode";
import * as theme from "./theme";
import { checkHex, contrastChecker } from "./util/color";

export enum ColorMode {
  dark,
  light,
}

export enum AdaptiveMode {
  none,
  gentle,
  aggressive,
}

export function activate(context: vscode.ExtensionContext) {
  retrieveGlobalState(context);
  context.subscriptions.push(
    vscode.commands.registerCommand("codemos-modern.theme", async () => {
      // Color mode
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
      if (!colorModeStr) {
        return;
      }
      const colorMode = colorModeInputHelper(colorModeStr.label);
      // Accent color
      const accentHex7 = await vscode.window.showInputBox({
        title: `Codemos Modern ${colorModeStr.label} 2/3`,
        prompt: "Accent color in hex color code (e.g., #60CDFF)",
        value: "#XXXXXX",
        valueSelection: [1, 7],
        ignoreFocusOut: true,
      });
      if (!accentHex7) {
        return;
      }
      const accentHex = await accentColorInputHelper(accentHex7, colorMode);
      if (!accentHex) {
        return;
      }
      // Adaptive mode
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
      if (!adaptiveModeStr) {
        return;
      }
      const adaptiveMode = adaptiveModeInputHelper(adaptiveModeStr.label);
      // Make theme
      await makeTheme(context, accentHex, colorMode, adaptiveMode);
      // Apply theme
      await applyTheme(colorMode);
      // Inform User && Reload window
      await vscode.window
        .showInformationMessage(
          "Your Codemos Modern is ready!",
          "Apply",
          "Later"
        )
        .then((selectedAction) => {
          if (selectedAction === "Apply") {
            vscode.commands.executeCommand("workbench.action.reloadWindow");
          }
        });
    })
  );
}

async function makeTheme(
  context: vscode.ExtensionContext,
  accentHex: string,
  colorMode: ColorMode,
  adaptiveMode: AdaptiveMode
) {
  // Create theme
  await theme.createTheme(accentHex, colorMode, adaptiveMode);
  // Save global state
  await saveGlobalState(context, accentHex, colorMode, adaptiveMode);
}

async function applyTheme(colorMode: ColorMode) {
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
}

async function retrieveGlobalState(context: vscode.ExtensionContext) {
  // Retrieve saved version
  const savedVersion: undefined | string = context.globalState.get(
    "codemos-modern.version"
  );
  if (!savedVersion || savedVersion === context.extension.packageJSON.version) {
    return;
  }
  // Retrieve saved color mode
  const savedColorMode: undefined | ColorMode = context.globalState.get(
    "codemos-modern.colorMode"
  );
  if (!savedColorMode) {
    return;
  }
  // Retrieve saved dark variant
  const darkAccentHex: undefined | string = context.globalState.get(
    "codemos-modern.dark.accentHex"
  );
  const darkAdaptiveMode: undefined | AdaptiveMode = context.globalState.get(
    "codemos-modern.dark.adaptiveMode"
  );
  if (darkAccentHex && darkAdaptiveMode) {
    await makeTheme(context, darkAccentHex, ColorMode.dark, darkAdaptiveMode);
  }
  // Retrieve saved light variant
  const lightAccentHex: undefined | string = context.globalState.get(
    "codemos-modern.light.accentHex"
  );
  const lightAdaptiveMode: undefined | AdaptiveMode = context.globalState.get(
    "codemos-modern.light.adaptiveMode"
  );
  if (lightAccentHex && lightAdaptiveMode) {
    await makeTheme(
      context,
      lightAccentHex,
      ColorMode.light,
      lightAdaptiveMode
    );
  }
  // Inform User && Reload window
  await vscode.window
    .showInformationMessage(
      "Your Codemos Modern has been updated!",
      "Apply",
      "Later"
    )
    .then((selectedAction) => {
      if (selectedAction === "Apply") {
        applyTheme(savedColorMode);
        vscode.commands.executeCommand("workbench.action.reloadWindow");
      }
    });
}

async function saveGlobalState(
  context: vscode.ExtensionContext,
  accentHex: string,
  colorMode: ColorMode,
  adaptiveMode: AdaptiveMode
) {
  await context.globalState.update(
    "codemos-modern.version",
    context.extension.packageJSON.version
  );
  await context.globalState.update("codemos-modern.colorMode", colorMode);
  switch (colorMode) {
    case ColorMode.dark:
      await context.globalState.update(
        "codemos-modern.dark.accentHex",
        accentHex
      );
      await context.globalState.update(
        "codemos-modern.dark.adaptiveMode",
        adaptiveMode
      );
      break;
    case ColorMode.light:
      await context.globalState.update(
        "codemos-modern.light.accentHex",
        accentHex
      );
      await context.globalState.update(
        "codemos-modern.light.adaptiveMode",
        adaptiveMode
      );
      break;
    default:
      return;
  }
}

function colorModeInputHelper(label: string): ColorMode {
  switch (label) {
    case "Dark":
      return ColorMode.dark;
    case "Light":
      return ColorMode.light;
    default:
      return ColorMode.dark;
  }
}

async function accentColorInputHelper(
  accentHex7: string,
  colorMode: ColorMode
) {
  const accentHex = accentHex7.substring(1);
  // Control HEX color code
  if (!checkHex(accentHex)) {
    await vscode.window.showErrorMessage("Invalid color code provided");
    return undefined;
  }
  // Control contrast ratio
  switch (colorMode) {
    case ColorMode.dark:
      if (!contrastChecker(accentHex, "000000")) {
        await vscode.window.showErrorMessage(
          "Accent color must have at least 4.5:1 contrast with black"
        );
        return undefined;
      }
      break;
    case ColorMode.light:
      if (!contrastChecker(accentHex, "FFFFFF")) {
        await vscode.window.showErrorMessage(
          "Accent color must have at least 4.5:1 contrast with white"
        );
        return undefined;
      }
      break;
    default:
      return undefined;
  }
  return accentHex;
}

function adaptiveModeInputHelper(label: string): AdaptiveMode {
  switch (label) {
    case "None":
      return AdaptiveMode.none;
    case "Gentle":
      return AdaptiveMode.gentle;
    case "Aggressive":
      return AdaptiveMode.aggressive;
    default:
      return AdaptiveMode.none;
  }
}

export function deactivate() {
  return;
}
