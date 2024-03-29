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

export type AuxiliaryThemeRegistryIndexWithId = {
  auxiliaryThemeRegistryId: AuxiliaryThemeRegistryId;
  auxiliaryThemeRegistryIndex: AuxiliaryThemeRegistryIndex;
};

export type AuxiliaryThemeInfo = {
  publisher: string;
  extension: string;
  theme: string;
  origin: "Built-in" | "Marketplace" | "GitHub";
  license: string;
  installed: boolean;
};

export type AuxiliaryThemeId = {
  owner: string;
  repo: string;
  publisher: string;
  extension: string;
  theme: string;
};

export type AuxiliaryThemeInfoWithId = {
  auxiliaryThemeId: AuxiliaryThemeId;
  auxiliaryThemeInfo: AuxiliaryThemeInfo;
};
