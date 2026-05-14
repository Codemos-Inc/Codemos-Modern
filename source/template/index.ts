import { existsSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { basename, join } from "path";
import { Design, Styles, Variant } from "../@types";
import { getMixedColorHex9 } from "../color";

export type StylesMap = Record<Variant, Record<Design, Styles>>;

type HexFormat = "hex6" | "hex7" | "hex8" | "hex9";

const TEMPLATE_REGEX =
  /@(dark|light)\/(flat|minimal|modern|natural)\/\{(hex[6-9]):([a-zA-Z0-9.]+)(?:&([a-zA-Z0-9.]+))?\}/g;

export function processTemplates(
  appDirPath: string,
  stylesMap: StylesMap,
): void {
  const templatesDir = join(appDirPath, "templates");
  if (!existsSync(templatesDir)) {
    return;
  }

  const templateFiles = readdirSync(templatesDir);
  for (const templateFile of templateFiles) {
    const templatePath = join(templatesDir, templateFile);
    const content = readFileSync(templatePath, "utf-8");

    const processed = content.replace(
      TEMPLATE_REGEX,
      (_match, variant, design, format, tokenPath, mixingTokenPath) => {
        return resolveTemplateToken(
          variant as Variant,
          design as Design,
          format as HexFormat,
          tokenPath as string,
          mixingTokenPath as string | undefined,
          stylesMap,
        );
      },
    );

    const outputPath = join(appDirPath, basename(templateFile));
    writeFileSync(outputPath, processed);
  }
}

function resolveToken(styles: Styles, tokenPath: string): string {
  const keys = tokenPath.split(".");
  let current: any = styles;
  for (const key of keys) {
    if (
      current === null ||
      current === undefined ||
      typeof current !== "object"
    ) {
      throw new Error(
        `Invalid token path: "${tokenPath}" — could not resolve "${key}"`,
      );
    }
    current = current[key];
  }
  if (typeof current !== "string") {
    throw new Error(
      `Token "${tokenPath}" did not resolve to a color string, got: ${typeof current}`,
    );
  }
  return current;
}

function isOpaque(hex9: string): boolean {
  return hex9.substring(7).toUpperCase() === "FF";
}

function formatColor(hex9: string, format: HexFormat): string {
  switch (format) {
    case "hex6":
      return hex9.substring(1, 7);
    case "hex7":
      return hex9.substring(0, 7);
    case "hex8":
      return hex9.substring(1);
    case "hex9":
      return hex9;
  }
}

function resolveTemplateToken(
  variant: Variant,
  design: Design,
  format: HexFormat,
  tokenPath: string,
  mixingTokenPath: string | undefined,
  stylesMap: StylesMap,
): string {
  const styles = stylesMap[variant][design];

  const sourceHex9 = resolveToken(styles, tokenPath);

  // For formats that include alpha, just format and return
  if (format === "hex8" || format === "hex9") {
    return formatColor(sourceHex9, format);
  }

  // For hex6/hex7, source must be opaque or mixed with an opaque backdrop
  if (isOpaque(sourceHex9)) {
    return formatColor(sourceHex9, format);
  }

  if (!mixingTokenPath) {
    throw new Error(
      `Token "${tokenPath}" has alpha (${sourceHex9}) but format is ${format} ` +
        `(no alpha channel) and no mixing color was provided. ` +
        `Use &backdropToken to specify a backdrop color for mixing.`,
    );
  }

  const backdropHex9 = resolveToken(styles, mixingTokenPath);
  if (!isOpaque(backdropHex9)) {
    throw new Error(
      `Mixing color "${mixingTokenPath}" (${backdropHex9}) is not opaque. ` +
        `The backdrop color must be fully opaque (alpha FF) for mixing.`,
    );
  }

  const mixedHex9 = getMixedColorHex9(sourceHex9, backdropHex9);
  return formatColor(mixedHex9, format);
}
