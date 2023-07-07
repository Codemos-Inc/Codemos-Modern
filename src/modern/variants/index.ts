import { Config, Styles, Variant } from "../../@types";
import { getStyles as getDarkStyles } from "./dark";
import { getStyles as getLightStyles } from "./light";

export const getStyles = (variant: Variant, config: Config): Styles => {
  switch (variant) {
    case "dark":
      return getDarkStyles(config.dark);
    case "light":
      return getLightStyles(config.light);
  }
};
