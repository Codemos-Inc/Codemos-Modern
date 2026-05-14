import { join } from "path";

export const ASSETS_DIR_PATH = join(__dirname, "..", "..", "assets");
/**/ export const ICONS_DIR_PATH = join(ASSETS_DIR_PATH, "icons");
/**/ export const L10N_DIR_PATH = join(ASSETS_DIR_PATH, "l10n");

export const DATA_DIR_PATH = join(__dirname, "..", "..", "data");
/**/ export const CACHE_DIR_PATH = join(DATA_DIR_PATH, "cache");
/**/ export const STATE_FILE_PATH = join(DATA_DIR_PATH, ".state.json");

export const OUT_DIR_PATH = join(__dirname, "..", "..", "out");
/**/ export const BIN_DIR_PATH = join(OUT_DIR_PATH, "bin");
/**/ export const INT_DIR_PATH = join(OUT_DIR_PATH, "int");
/**/ export const STYLES_DIR_PATH = join(OUT_DIR_PATH, "styles");

export const RESOURCES_DIR_PATH = join(__dirname, "..", "..", "resources");
/**/ export const BADGES_DIR_PATH = join(RESOURCES_DIR_PATH, "badges");
/**/ export const FONTS_DIR_PATH = join(RESOURCES_DIR_PATH, "fonts");
/**/ export const IMAGES_DIR_PATH = join(RESOURCES_DIR_PATH, "images");

export const THEMES_DIR_PATH = join(__dirname, "..", "..", "themes");
/**/ export const FISH_DIR_PATH = join(THEMES_DIR_PATH, "fish");
/**/ export const GHOSTTY_DIR_PATH = join(THEMES_DIR_PATH, "ghostty");
/**/ export const STARSHIP_DIR_PATH = join(THEMES_DIR_PATH, "starship");
/**/ export const VSCODE_DIR_PATH = join(THEMES_DIR_PATH, "vscode");
