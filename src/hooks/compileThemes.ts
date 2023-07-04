import { writeFileSync } from "fs";
import { Variant } from "../@types";
import { getThemePaths } from "../extension/helpers";
import { defaultConfig } from "../modern";
import { getThemeObject } from "../theme";

const themePaths = getThemePaths();
const variants: Variant[] = ["dark", "light"];
variants.map((variant) => {
  writeFileSync(
    themePaths[variant],
    JSON.stringify(getThemeObject(variant, defaultConfig), null, 2)
  );
});
