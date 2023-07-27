export type AuxiliaryThemeRegistryIndex = {
  version: string;
  themes: {
    dark: AuxiliaryThemeInfo[];
    light: AuxiliaryThemeInfo[];
  };
};

export type AuxiliaryThemeRegistryId = {
  owner: string;
  repo: string;
};

export type AuxiliaryThemeInfo = {
  publisher: string;
  pkg: string;
  theme: string;
  origin: "Builtin" | "Marketplace" | "GitHub";
  license: string;
};

export type AuxiliaryThemeId = {
  owner: string;
  repo: string;
  publisher: string;
  pkg: string;
  theme: string;
};
