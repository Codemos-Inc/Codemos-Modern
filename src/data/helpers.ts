import { AuxiliaryThemeId, AuxiliaryThemeRegistryId } from "../@types";

export const getAuxiliaryThemeRegistryIds = (
  auxiliaryThemeRegistries: string[],
): AuxiliaryThemeRegistryId[] => {
  return auxiliaryThemeRegistries.map((auxiliaryThemeRegistry) => {
    const [owner, repo] = auxiliaryThemeRegistry.split("/");
    return { owner, repo };
  });
};

export const getAuxiliaryThemeId = (
  auxiliaryTheme: string,
): AuxiliaryThemeId => {
  const [owner, repo, publisher, pkg, theme] = auxiliaryTheme.split("/");
  return { owner, repo, publisher, pkg, theme };
};
