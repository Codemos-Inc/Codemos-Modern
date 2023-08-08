import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { defaultStateObject } from "../extension/state";

const stateString = JSON.stringify(defaultStateObject, null, 2);
if (!existsSync(join(__dirname, "..", "..", "data"))) {
  mkdirSync(join(__dirname, "..", "..", "data"), { recursive: true });
}
writeFileSync(join(__dirname, "..", "..", "data", ".state.json"), stateString);
