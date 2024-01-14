import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import { L10N_DIR_NAME } from "../extension/constants";

let cache: Record<string, string>;

export function l10nT(
  key: string,
  args?: Array<string | number | boolean>,
): string {
  if (!cache) {
    const filePath = path.join(
      __dirname,
      `../../${L10N_DIR_NAME}/bundle.l10n.${vscode.env.language}.json`,
    );
    if (fs.existsSync(filePath)) {
      cache = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    } else {
      cache = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, `../../${L10N_DIR_NAME}/bundle.l10n.json`),
          "utf-8",
        ),
      );
    }
  }
  let value: string =
    cache[key] ??
    `🌐 Translation missing for key: "${key}". Report to Codemos.`;
  if (args) {
    args.forEach((arg, index) => {
      value = value.replace(new RegExp(`\\{${index}\\}`, "g"), String(arg));
    });
  }
  return value;
}
