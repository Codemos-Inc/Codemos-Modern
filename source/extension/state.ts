import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { StateObj } from "../@types";
import { defaultConfig } from "../modern";

export const defaultStateObj: StateObj = {
  isUntouched: true,
  config: defaultConfig,
};

export const getStateObj = (): StateObj => {
  try {
    const stateStr = readFileSync(join(__dirname, "..", "..", "data", ".state.json"), "utf-8");
    const stateObj = JSON.parse(stateStr);
    return stateObj as StateObj;
  } catch (error) {
    console.log(error);
    // 🔴 Write to output
    console.warn(
      "Codemos Modern: Unexpected error ocurred while trying to read state file, recreating it with default values.",
    );
    writeStateFile(defaultStateObj);
    return defaultStateObj;
  }
};

export const updateState = (stateObj: StateObj) => {
  writeStateFile(stateObj);
};

const writeStateFile = (stateObj: StateObj) => {
  const stateStr = JSON.stringify(stateObj, null, 2);
  const path = join(__dirname, "..", "..", "data", ".state.json");
  if (!existsSync(join(__dirname, "..", "..", "data"))) {
    mkdirSync(join(__dirname, "..", "..", "data"), {
      recursive: true,
    });
  }
  writeFileSync(path, stateStr);
};
