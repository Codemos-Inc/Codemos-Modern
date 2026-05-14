import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { StateObj } from "../@types";
import { DATA_DIR_PATH, STATE_FILE_PATH } from "../data/paths";
import { defaultConfig } from "../modern";

export const defaultStateObj: StateObj = {
  isUntouched: true,
  config: defaultConfig,
};

export function getStateObj(): StateObj {
  try {
    const stateStr = readFileSync(STATE_FILE_PATH, "utf-8");
    const stateObj = JSON.parse(stateStr);
    return stateObj as StateObj;
  } catch (error) {
    console.log(error);
    // 🔴 Write to output
    console.warn(
      "Codemos Modern: Unexpected error occurred while trying to read state file, recreating it with default values.",
    );
    writeStateFile(defaultStateObj);
    return defaultStateObj;
  }
}

export function updateState(stateObj: StateObj) {
  writeStateFile(stateObj);
}

function writeStateFile(stateObj: StateObj) {
  const stateStr = JSON.stringify(stateObj, null, 2);
  const path = STATE_FILE_PATH;
  if (!existsSync(DATA_DIR_PATH)) {
    mkdirSync(DATA_DIR_PATH, {
      recursive: true,
    });
  }
  writeFileSync(path, stateStr);
}
