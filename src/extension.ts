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
import { runAnalysis } from "./runAnalysis";

export const activate = async (ctx: vscode.ExtensionContext) => {
  const connectedViews: Partial<Record<ViewKey, vscode.WebviewView>> = {};
  // --------------------------------------------
  const diagnosticCollection =
    vscode.languages.createDiagnosticCollection("analysis");

  // Set a command to trigger the creation of the placeholder diagnostic
  ctx.subscriptions.push(
    vscode.commands.registerCommand(
      "extension.createPlaceholderDiagnostic",
      () => {
        const activeEditor = vscode.window.activeTextEditor;

        if (activeEditor) {
          const doc = activeEditor.document;

          // Create a simple diagnostic for the first line
          const range = new vscode.Range(
            new vscode.Position(0, 0),
            new vscode.Position(0, 10)
          );
          const diagnostic = new vscode.Diagnostic(
            range,
            "Placeholder problem for analysis.",
            vscode.DiagnosticSeverity.Warning
          );

          diagnostic.source = "AnalysisEngine";

          // Add diagnostics to the file
          diagnosticCollection.set(doc.uri, [diagnostic]);

          // Show a message that diagnostics have been added
          vscode.window.showInformationMessage(
            `Placeholder diagnostic created for ${doc.uri.fsPath} in the Problems pane.`
          );
        } else {
          vscode.window.showErrorMessage("No active editor found.");
        }
      }
    )
  );

  // Clear diagnostics when the extension is deactivated
  ctx.subscriptions.push(diagnosticCollection);

  // Listen for the active text editor change to simulate the click
  ctx.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (editor) {
        const document = editor.document;
        const diagnostics = vscode.languages.getDiagnostics(document.uri);

        if (diagnostics.length > 0) {
          vscode.window.showInformationMessage(
            `Diagnostics found: ${diagnostics[0].message}`
          );

          // Simulate sending data to the webview (if needed)
          const view = connectedViews["App"];
          if (view) {
            view.webview.postMessage({
              type: "showIncidentDetails",
              message: diagnostics[0].message,
            });
          }
        }
      }
    })
  );

  // -------------------------------------------

  // const triggerEvent = <E extends keyof ViewEvents>(
  //   key: E,
  //   ...params: Parameters<ViewEvents[E]>
  // ) => {
  //   Object.values(connectedViews).forEach((view) => {
  //     view.webview.postMessage({
  //       type: "event",
  //       key,
  //       value: params,
  //     } as ViewApiEvent<E>);
  //   });
  // };

  const api: ViewApi = {
    runAnalysis: async () => {
      const view = connectedViews["App"];
      await runAnalysis(ctx, view?.webview);
    },
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
  registerAndConnectView("App");
  ctx.subscriptions.push(
    vscode.commands.registerCommand("kai-webview.runAnalysis", () =>
      runAnalysis(ctx, connectedViews["App"]?.webview)
    )
  );
  await vscode.commands.executeCommand("workbench.view.explorer");
};

export const deactivate = () => {
  return;
};
