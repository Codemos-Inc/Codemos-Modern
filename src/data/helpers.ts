import { AuxiliaryThemeId, AuxiliaryThemeRegistryId } from "../@types/index";

export const getAuxiliaryThemeRegistryIds = (
  auxiliaryThemeRegistries: string[],
): AuxiliaryThemeRegistryId[] => {
  return auxiliaryThemeRegistries.map((auxiliaryThemeRegistry) => {
    const [owner, repo] = auxiliaryThemeRegistry.split("/");
    if (!owner || !repo) {
      throw new Error(
        `Invalid auxiliary theme registry: ${auxiliaryThemeRegistry}`,
      );
    }
    return { owner, repo };
  });
};

export const getAuxiliaryThemeId = (
  auxiliaryTheme: string,
): AuxiliaryThemeId => {
  const [owner, repo, publisher, extension, theme] = auxiliaryTheme.split("/");
  if (!owner || !repo || !publisher || !extension || !theme) {
    throw new Error(`Invalid auxiliary theme: ${auxiliaryTheme}`);
  }
  return { owner, repo, publisher, extension, theme };
};
