import { Config } from "../modern";

export type StateObject = {
  version: number;
  isUntouched: boolean;
  config: Config;
};
