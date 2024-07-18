let isConfiguredFromCommand = false;
export const getIsConfiguredFromCommand = () => isConfiguredFromCommand;
export const setIsConfiguredFromCommand = (value: boolean) => {
  isConfiguredFromCommand = value;
};

let isOnlineAvailable = false;
export const getOnlineAvailability = () => isOnlineAvailable;
export const setOnlineAvailability = (value: boolean) => {
  isOnlineAvailable = value;
};
