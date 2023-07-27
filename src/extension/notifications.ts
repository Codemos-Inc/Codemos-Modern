import { Progress, ProgressLocation, commands, window } from "vscode";
import { NOTIFICATION_SIGNATURE } from "./constants";

export const showInformationNotification = (
  message: string,
  actions: string[] | null,
  command: string | null,
) => {
  const messageWithSignature = `${NOTIFICATION_SIGNATURE} ${message}`;
  if (!actions) {
    window.showInformationMessage(messageWithSignature);
  } else {
    window
      .showInformationMessage(messageWithSignature, ...actions)
      .then((selectedAction) => {
        if (selectedAction === actions[0]) {
          if (command) {
            commands.executeCommand(command);
          }
        }
      });
  }
};

export const showErrorNotification = (
  message: string,
  actions: string[] | null,
  command: string | null,
) => {
  const messageWithSignature = `${NOTIFICATION_SIGNATURE} ${message}`;
  if (!actions) {
    window.showErrorMessage(messageWithSignature);
  } else {
    window
      .showInformationMessage(messageWithSignature, ...actions)
      .then((selectedAction) => {
        if (selectedAction === actions[0]) {
          if (command) {
            commands.executeCommand(command);
          }
        }
      });
  }
};

export const showProgressNotification = (
  title: string,
  task: (
    progress: Progress<{
      message?: string | undefined;
      increment?: number | undefined;
    }>,
  ) => Promise<void>,
) => {
  window.withProgress(
    {
      location: ProgressLocation.Notification,
      title: title,
      cancellable: false,
    },
    task,
  );
};
