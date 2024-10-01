import { Config, Styles, Variant } from "../../@types";
import { getStyles as getDarkFlatStyles } from "./dark/flat";
import { getStyles as getDarkMinimalStyles } from "./dark/minimal";
import { getStyles as getDarkModernStyles } from "./dark/modern";
import { getStyles as getLightFlatStyles } from "./light/flat";
import { getStyles as getLightMinimalStyles } from "./light/minimal";
import { getStyles as getLightModernStyles } from "./light/modern";

export const getStyles = (variant: Variant, config: Config): Styles => {
  switch (variant) {
    case "dark":
      if (config[variant].design === "modern") {
        return getDarkModernStyles(config.dark);
      } else if (config[variant].design === "minimal") {
        return getDarkMinimalStyles(config.dark);
      } else if (config[variant].design === "flat") {
        return getDarkFlatStyles(config.dark);
      } else {
        return getDarkModernStyles(config.dark);
      }
    case "light":
      if (config[variant].design === "modern") {
        return getLightModernStyles(config.light);
      } else if (config[variant].design === "minimal") {
        return getLightMinimalStyles(config.light);
      } else if (config[variant].design === "flat") {
        return getLightFlatStyles(config.light);
      } else {
        return getLightModernStyles(config.light);
      }
  }
};
