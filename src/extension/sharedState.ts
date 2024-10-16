let isConfiguredFromCmd = false;
export const getIsConfiguredFromCmd = () => isConfiguredFromCmd;
export const setIsConfiguredFromCmd = (value: boolean) => {
  isConfiguredFromCmd = value;
};

let isOnlineAvail = false;
export const getOnlineAvail = () => isOnlineAvail;
export const setOnlineAvail = (value: boolean) => {
  isOnlineAvail = value;
};
