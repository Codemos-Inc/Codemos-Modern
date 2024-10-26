import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { defaultStateObj } from "../extension/state";

const stateStr = JSON.stringify(defaultStateObj, null, 2);
if (!existsSync(join(__dirname, "..", "..", "data"))) {
  mkdirSync(join(__dirname, "..", "..", "data"), { recursive: true });
}
writeFileSync(join(__dirname, "..", "..", "data", ".state.json"), stateStr);
