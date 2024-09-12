import * as vscode from "vscode";
import { ViewKey } from "./views";
import { registerView } from "./registerView";
import {
  ViewApi,
  ViewApiError,
  ViewApiEvent,
  ViewApiRequest,
  ViewApiResponse,
  ViewEvents,
} from "./viewApi";
import fs from "node:fs/promises";

export const activate = async (ctx: vscode.ExtensionContext) => {
  const connectedViews: Partial<Record<ViewKey, vscode.WebviewView>> = {};

  const triggerEvent = <E extends keyof ViewEvents>(
    key: E,
    ...params: Parameters<ViewEvents[E]>
  ) => {
    Object.values(connectedViews).forEach((view) => {
      view.webview.postMessage({
        type: "event",
        key,
        value: params,
      } as ViewApiEvent<E>);
    });
  };

  const api: ViewApi = {
    retrieveAndCheckSettings: async () => {
      // Access your extension's settings
      const config = vscode.workspace.getConfiguration("kai-webview");

      // Retrieve the data from the workspace settings
      const analysisData = config.get("analysisFormData");
      console.log("Retrieved analysis data:", analysisData);

      // Check if the data exists
      if (analysisData !== undefined) {
        console.log("Retrieved analysis data:", analysisData);
      } else {
        console.log("Analysis data not found.");
      }

      // Optionally, you can return this data if needed elsewhere
      return analysisData;
    },

    getFileContents: async () => {
      const uris = await vscode.window.showOpenDialog({
        canSelectFiles: true,
        canSelectFolders: false,
        canSelectMany: false,
        openLabel: "Select file",
        title: "Select file to read",
      });

      if (!uris?.length) {
        return "";
      }

      const contents = await fs.readFile(uris[0].fsPath, "utf-8");
      return contents;
    },
    showExampleViewB: () => {
      connectedViews?.exampleViewB?.show?.(true);
      vscode.commands.executeCommand(`exampleViewB.focus`);
    },
    sendMessageToExampleB: (msg: string) => {
      triggerEvent("exampleBMessage", msg);
    },
    sendAnalysisFormData: async (data) => {
      console.log("data", data);
      console.log("triggerEvent or pass data to another function");
      if (
        !vscode.workspace.workspaceFolders ||
        vscode.workspace.workspaceFolders.length === 0
      ) {
        vscode.window.showErrorMessage(
          "No workspace is open. Please open a workspace to save settings."
        );
        return;
      }
      const config = vscode.workspace.getConfiguration("kai-webview");

      await config.update(
        "analysisFormData",
        data,
        vscode.ConfigurationTarget.Workspace
      );
      const updatedData = config.get("analysisFormData");
      console.log("Updated analysis data:", updatedData);

      if (updatedData === data) {
        console.log("Data successfully written to the workspace.");
      } else {
        console.log("Data write to workspace failed or was inconsistent.");
      }

      //if we need to update other webviews with the new data
      // triggerEvent("analysisFormData", data);
    },
  };

  const isViewApiRequest = <K extends keyof ViewApi>(
    msg: unknown
  ): msg is ViewApiRequest<K> =>
    msg != null &&
    typeof msg === "object" &&
    "type" in msg &&
    msg.type === "request";

  const registerAndConnectView = async <V extends ViewKey>(key: V) => {
    const view = await registerView(ctx, key);
    connectedViews[key] = view;
    const onMessage = async (msg: Record<string, unknown>) => {
      if (!isViewApiRequest(msg)) {
        return;
      }
      try {
        // @ts-expect-error
        const val = await Promise.resolve(api[msg.key](...msg.params));
        const res: ViewApiResponse = {
          type: "response",
          id: msg.id,
          value: val,
        };
        view.webview.postMessage(res);
      } catch (e: unknown) {
        const err: ViewApiError = {
          type: "error",
          id: msg.id,
          value:
            e instanceof Error ? e.message : "An unexpected error occurred",
        };
        view.webview.postMessage(err);
      }
    };

    view.webview.onDidReceiveMessage(onMessage);
  };

  // registerAndConnectView("exampleViewA");
  registerAndConnectView("exampleViewC");

  await vscode.commands.executeCommand("workbench.view.explorer");
};

export const deactivate = () => {
  return;
};
