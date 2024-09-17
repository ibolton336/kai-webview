import * as vscode from "vscode";
import * as cp from "child_process";
import * as path from "path";
import * as fs from "fs";
import * as yaml from "js-yaml";

export async function runAnalysis(
  context: vscode.ExtensionContext,
  webview?: vscode.Webview
): Promise<void> {
  try {
    // Step 1: Fetch the configuration from .vscode/settings.json
    const config = vscode.workspace.getConfiguration("kai-webview");
    const analysisFormData = config.get<any>("analysisFormData");

    if (!analysisFormData) {
      throw new Error("No analysis form data found in .vscode/settings.json");
    }

    // Step 2: Build the arguments for the kantra binary
    const args: string[] = ["analyze", "--provider=java"];

    const workspaceFolders = vscode.workspace.workspaceFolders;

    if (workspaceFolders && workspaceFolders.length > 0) {
      // Return the first workspace folder's path
      args.push("--input", workspaceFolders[0].uri.fsPath);
    }

    if (analysisFormData.sources) {
      analysisFormData.sources.forEach((source: any) => {
        args.push("--source", source);
      });
    }

    if (analysisFormData.targets) {
      analysisFormData.targets.forEach((target: any) => {
        args.push("--target", target);
      });
    }

    if (analysisFormData.sourceOnly) {
      args.push("--mode=source-only");
    }

    if (analysisFormData.analyzeLibraries) {
      args.push("--analyze-known-libraries");
    }

    // Use fsPath to get the correct path as a string
    const outputPath = context.storageUri?.fsPath;
    if (!outputPath) {
      throw new Error("Unable to resolve storage path");
    }

    args.push("--output", outputPath);
    args.push("--overwrite");

    // Step 3: Get the path to the kantra binary using context.asAbsolutePath
    const kantraPath = context.asAbsolutePath(path.join("assets", "kantra"));

    if (!fs.existsSync(kantraPath)) {
      throw new Error(`Kantra binary not found at path: ${kantraPath}`);
    }
    try {
      fs.accessSync(kantraPath, fs.constants.X_OK);
    } catch (err) {
      throw new Error(`Kantra binary is not executable: ${kantraPath}`);
    }

    // Notify the webview that analysis is starting
    if (webview) {
      webview.postMessage({ type: "analysisStarted" });
    }

    // Step 4: Use vscode.window.withProgress to show a progress indicator
    await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: "Running Analysis",
        cancellable: false,
      },
      async (progress) => {
        return new Promise<void>((resolve, reject) => {
          const outputChannel: vscode.OutputChannel =
            vscode.window.createOutputChannel("kai-webview");
          outputChannel.clear();
          outputChannel.appendLine("Preparing to run analysis...");
          outputChannel.show();

          progress.report({ message: "Initializing..." });

          outputChannel.appendLine(
            `Running command: ${kantraPath} ${args.join(" ")}`
          );

          const analysis = cp.spawn(kantraPath, args);

          // Set a timeout to prevent hanging indefinitely

          // TODO: Make this configurable / cancelable
          const analysisTimeout = setTimeout(() => {
            analysis.kill();
            vscode.window.showErrorMessage("Analysis process timed out.");
            outputChannel.appendLine("Analysis process timed out.");
            reject(new Error("Analysis process timed out."));
          }, 300000); // Timeout after 5 minutes

          let stderrData = ""; // Accumulate stderr data
          analysis.stdout.on("data", (data) => {
            outputChannel.append(data.toString());
          });
          analysis.stderr.on("data", (data) => {
            stderrData += data.toString();
          });

          analysis.on("close", (code) => {
            clearTimeout(analysisTimeout);

            if (code !== 0) {
              vscode.window.showErrorMessage(`Analysis failed: ${stderrData}`);
              return reject(
                new Error(`Analysis failed with code ${code}: ${stderrData}`)
              );
            }

            // Analysis completed successfully
            vscode.window.showInformationMessage("Analysis complete!");
            outputChannel.appendLine("Analysis completed successfully.");

            try {
              // Process the analysis results
              const yamlContent = fs.readFileSync(
                path.join(outputPath, "output.yaml"),
                "utf8"
              );
              const analysisResults = yaml.load(yamlContent);
              context.workspaceState.update("analysisResults", analysisResults);

              if (!Array.isArray(analysisResults)) {
                throw new Error("Expected an array of RuleSets in the output.");
              }
              outputChannel.appendLine("Processing analysis output.yaml");

              const diagnosticCollection =
                vscode.languages.createDiagnosticCollection("kai-webview");

              analysisResults.forEach((ruleset: any) => {
                Object.keys(ruleset.violations ?? {}).forEach((ruleId) => {
                  const category = ruleset.violations[ruleId].category;
                  ruleset.violations[ruleId].incidents?.forEach(
                    (incident: any) => {
                      const fileName = vscode.Uri.file(
                        incident.uri.replace(
                          "file:///opt/input/source",
                          vscode.workspace.workspaceFolders?.[0].uri.fsPath
                        )
                      );
                      const lineNumber = incident.lineNumber
                        ? incident.lineNumber - 1
                        : 0;
                      const severity = (category: string) => {
                        if (category === "mandatory") {
                          return vscode.DiagnosticSeverity.Error;
                        }
                        if (category === "potential") {
                          return vscode.DiagnosticSeverity.Warning;
                        }
                        if (category === "optional") {
                          return vscode.DiagnosticSeverity.Information;
                        }
                        return vscode.DiagnosticSeverity.Hint;
                      };
                      diagnosticCollection.set(fileName, [
                        new vscode.Diagnostic(
                          new vscode.Range(lineNumber, 0, lineNumber, 100),
                          incident.message,
                          severity(category)
                        ),
                      ]);
                    }
                  );
                });
              });
              vscode.window.showInformationMessage("Diagnostics created.");
              resolve();
            } catch (error: any) {
              vscode.window.showErrorMessage(
                `Error processing analysis results: ${error.message}`
              );
              outputChannel.appendLine(`Error: ${error.message}`);
              reject(error);
            }
          });
        });
      }
    );
  } catch (error: any) {
    if (webview) {
      webview.postMessage({
        type: "analysisFailed",
        message: error.message,
      });
    }
    vscode.window.showErrorMessage(`Failed to run analysis: ${error.message}`);
  }
}
