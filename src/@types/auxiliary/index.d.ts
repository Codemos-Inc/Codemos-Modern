export type AuxThemeRegIndex = {
  version: string;
  themes: {
    dark: AuxThemeInfo[];
    light: AuxThemeInfo[];
  };
};

export type AuxThemeRegId = {
  owner: string;
  repo: string;
};

export type AuxThemeRegIndexWithId = {
  auxThemeRegId: AuxThemeRegId;
  auxThemeRegIndex: AuxThemeRegIndex;
};

export type AuxThemeInfo = {
  publisher: string;
  extension: string;
  theme: string;
  origin: "Built-in" | "Marketplace" | "GitHub";
  license: string;
  installed: boolean;
};

export type AuxThemeId = {
  owner: string;
  repo: string;
  publisher: string;
  extension: string;
  theme: string;
};
