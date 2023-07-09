import { writeFileSync } from "fs";
import { join } from "path";
import { defaultStateObject } from "../extension/state";

const stateString = JSON.stringify(defaultStateObject, null, 2);
writeFileSync(join(__dirname, "..", "..", "data", ".state.json"), stateString);
