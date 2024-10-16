import { join } from "path";
import { ThemePaths, Variant } from "../@types";

export const toggleInitialCase = (s: string): string => {
  const c = s.charAt(0);
  return c === c.toLowerCase()
    ? c.toUpperCase() + s.substring(1)
    : c.toLowerCase() + s.substring(1);
};

export const validatePercentage = (value: string): boolean => {
  const num = Number(value);
  return !isNaN(num) && num >= 0 && num <= 100;
};

export const intensityToAlpha = (intensity: number): number => {
  return (100 - intensity) / 100;
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
        `Codemos Modern (${toggleInitialCase(variant)})-color-theme.json`,
      )),
  );
  return themePaths;
};
