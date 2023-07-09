import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { StateObject } from "../@types";
import { defaultConfig } from "../modern";

export const defaultStateObject: StateObject = {
  version: 1,
  isUntouched: true,
  config: defaultConfig,
};

export const getStateObject = (): StateObject => {
  try {
    const stateString = readFileSync(
      join(__dirname, "..", "..", "data", ".state.json"),
      "utf-8"
    );
    const stateObject = JSON.parse(stateString);
    return stateObject as StateObject;
  } catch (error) {
    console.error(
      "Codemos Modern: Unexpected error ocurred while trying to read state file, recreating it with default values."
    );
    writeStateFile(defaultStateObject);
    return defaultStateObject;
  }
};

export const updateState = (stateObject: StateObject) => {
  writeStateFile(stateObject);
};

const writeStateFile = (stateObject: StateObject) => {
  const stateString = JSON.stringify(stateObject, null, 2);
  writeFileSync(
    join(__dirname, "..", "..", "data", ".state.json"),
    stateString
  );
};
