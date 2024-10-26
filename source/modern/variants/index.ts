import { Config, Styles, Variant, type AdaptationPreset } from "../../@types";
import { getStyles as getDarkFlatStyles } from "./dark/flat";
import { getStyles as getDarkMinimalStyles } from "./dark/minimal";
import { getStyles as getDarkModernStyles } from "./dark/modern";
import { getStyles as getDarkNaturalStyles } from "./dark/natural";
import { getStyles as getLightFlatStyles } from "./light/flat";
import { getStyles as getLightMinimalStyles } from "./light/minimal";
import { getStyles as getLightModernStyles } from "./light/modern";
import { getStyles as getLightNaturalStyles } from "./light/natural";

export const getStyles = (variant: Variant, config: Config): Styles => {
  switch (variant) {
    case "dark":
      if (config[variant].design === "modern") {
        return getDarkModernStyles(config.dark);
      } else if (config[variant].design === "natural") {
        return getDarkNaturalStyles(config.dark);
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
      } else if (config[variant].design === "natural") {
        return getLightNaturalStyles(config.light);
      } else if (config[variant].design === "minimal") {
        return getLightMinimalStyles(config.light);
      } else if (config[variant].design === "flat") {
        return getLightFlatStyles(config.light);
      } else {
        return getLightModernStyles(config.light);
      }
  }
};

export const getIntensity = (variant: Variant, preset: AdaptationPreset): number => {
  switch (variant) {
    case "dark":
      switch (preset) {
        case "none":
          return 0;
        case "gentle":
          return 10;
        case "moderate":
          return 20;
        case "aggressive":
          return 40;
        default:
          throw new Error("Invalid preset");
      }
    case "light":
      switch (preset) {
        case "none":
          return 0;
        case "gentle":
          return 30;
        case "moderate":
          return 50;
        case "aggressive":
          return 90;
        default:
          throw new Error("Invalid preset");
      }
  }
};
