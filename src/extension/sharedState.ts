let configuredFromCommand = false;

export const getIsConfiguredFromCommand = () => configuredFromCommand;

export const setIsConfiguredFromCommand = (value: boolean) => {
  configuredFromCommand = value;
};
