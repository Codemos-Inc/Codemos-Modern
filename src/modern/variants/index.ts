import { Config, Styles, Variant } from "../../@types/index";
import { getStyles as getDarkMinimalStyles } from "./dark/minimal";
import { getStyles as getDarkModernStyles } from "./dark/modern";
import { getStyles as getLightMinimalStyles } from "./light/minimal";
import { getStyles as getLightModernStyles } from "./light/modern";

export const getStyles = (variant: Variant, config: Config): Styles => {
  switch (variant) {
    case "dark":
      if (config[variant].design === "modern") {
        return getDarkModernStyles(config.dark);
      } else {
        return getDarkMinimalStyles(config.dark);
      }
    case "light":
      if (config[variant].design === "modern") {
        return getLightModernStyles(config.light);
      } else {
        return getLightMinimalStyles(config.light);
      }
  }
};
