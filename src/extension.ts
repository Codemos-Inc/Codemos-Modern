// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('codemos-modern-for-vscode.theme', async () => {
		const dayNight = await vscode.window.showQuickPick([{ label: 'Dark', description: 'Color Theme' }, { label: 'Light', description: 'Color Theme' }], { title: 'Codemos Modern 1/2', placeHolder: 'Select a color mode', ignoreFocusOut: true });
		const hexColor = await vscode.window.showInputBox({ title: 'Codemos Modern 2/2', prompt: 'Accent color in hex format e.g. #FF0000', value: '#XXXXXX', valueSelection: [1, 7], ignoreFocusOut: true });
		var regex = /[0-9A-Fa-f]{6}/g;
	}));
}

// This method is called when your extension is deactivated
export function deactivate() {}
