import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { Variant } from "../@types";

export const generateAdaptiveModeIcons = (
  variant: Variant,
  inDarkTheme: boolean,
  noneModeColor: string,
  gentleModeColor: string,
  moderateModeColor: string,
  aggressiveModeColor: string,
) => {
  const variantIconsDir = join(__dirname, "..", "..", "res", "icons", variant);
  if (!existsSync(variantIconsDir)) {
    mkdirSync(variantIconsDir, {
      recursive: true,
    });
  }
  const noneModeIconPath = join(variantIconsDir, "adaptation_none.svg");
  const noneModeSvg = generateSvg(inDarkTheme, noneModeColor);
  writeFileSync(noneModeIconPath, noneModeSvg);
  const gentleModeIconPath = join(variantIconsDir, "adaptation_gentle.svg");
  const gentleModeSvg = generateSvg(inDarkTheme, gentleModeColor);
  writeFileSync(gentleModeIconPath, gentleModeSvg);
  const moderateModeIconPath = join(variantIconsDir, "adaptation_moderate.svg");
  const moderateModeSvg = generateSvg(inDarkTheme, moderateModeColor);
  writeFileSync(moderateModeIconPath, moderateModeSvg);
  const aggressiveModeIconPath = join(
    variantIconsDir,
    "adaptation_aggressive.svg",
  );
  const aggressiveModeSvg = generateSvg(inDarkTheme, aggressiveModeColor);
  writeFileSync(aggressiveModeIconPath, aggressiveModeSvg);
};

const generateSvg = (inDarkTheme: boolean, color: string) => {
  return `
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23.5" fill="${color}" stroke="${
        inDarkTheme ? "white" : "black"
      }"/>
    </svg>
  `;
};
