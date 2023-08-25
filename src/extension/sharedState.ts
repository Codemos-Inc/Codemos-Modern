let isConfiguredFromCommand = false;
export const getIsConfiguredFromCommand = () => isConfiguredFromCommand;
export const setIsConfiguredFromCommand = (value: boolean) => {
  isConfiguredFromCommand = value;
};

let isOfflineMode = true;
export const getIsOfflineMode = () => isOfflineMode;
export const setIsOfflineMode = (value: boolean) => {
  isOfflineMode = value;
};
