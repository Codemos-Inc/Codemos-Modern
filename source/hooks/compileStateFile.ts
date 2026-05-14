import { existsSync, mkdirSync, writeFileSync } from "fs";
import { DATA_DIR_PATH, STATE_FILE_PATH } from "../data/paths";
import { defaultStateObj } from "../extension/state";

const stateStr = JSON.stringify(defaultStateObj, null, 2);
if (!existsSync(DATA_DIR_PATH)) {
  mkdirSync(DATA_DIR_PATH, { recursive: true });
}
writeFileSync(STATE_FILE_PATH, stateStr);
