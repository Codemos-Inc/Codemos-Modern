import { join } from "path";
import { ThemePaths, Variant } from "../@types";
import {
  FISH_DIR_PATH,
  GHOSTTY_DIR_PATH,
  STARSHIP_DIR_PATH,
  VSCODE_DIR_PATH,
} from "../data/paths";

export function toggleInitialCase(s: string): string {
  const c = s.charAt(0);
  return c === c.toLowerCase()
    ? c.toUpperCase() + s.substring(1)
    : c.toLowerCase() + s.substring(1);
}

export function validatePercentage(value: string): boolean {
  const num = Number(value);
  return !isNaN(num) && num >= 0 && num <= 100;
}

export function intensityToAlpha(intensity: number): number {
  return (100 - intensity) / 100;
}

export function getThemePaths(): ThemePaths {
  const variants: Variant[] = ["dark", "light"];
  const themePaths: ThemePaths = {
    vscode: {
      dark: "",
      light: "",
    },
    fish: join(FISH_DIR_PATH, "codemos-modern.theme"),
    ghostty: {
      dark: join(GHOSTTY_DIR_PATH, "Codemos Modern (Dark)"),
      light: join(GHOSTTY_DIR_PATH, "Codemos Modern (Light)"),
    },
    starship: {
      dark: join(STARSHIP_DIR_PATH, "codemos-modern-dark.toml"),
      light: join(STARSHIP_DIR_PATH, "codemos-modern-light.toml"),
    },
  };
  variants.map(
    (variant) =>
      (themePaths.vscode[variant] = join(
        VSCODE_DIR_PATH,
        `Codemos Modern (${toggleInitialCase(variant)})-color-theme.json`,
      )),
  );
  return themePaths;
}
