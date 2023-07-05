import { join } from "path";
import { Variant } from "../@types/modern";
import { ThemePaths } from "../@types/theme";

export const toggleFirstLetterCase = (s: string): string => {
  const c = s.charAt(0);
  return c === c.toLowerCase()
    ? c.toUpperCase() + s.substring(1)
    : c.toLowerCase() + s.substring(1);
};

export const getThemePaths = (): ThemePaths => {
  const variants: Variant[] = ["dark", "light"];
  const themePaths: ThemePaths = {
    dark: "",
    light: "",
  };
  variants.map(
    (variant) =>
      (themePaths[variant] = join(
        __dirname,
        "..",
        "..",
        "themes",
        `Codemos Modern (${toggleFirstLetterCase(variant)})-color-theme.json`
      ))
  );
  return themePaths;
};
