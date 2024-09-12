import * as vscode from "vscode";
import * as cp from "child_process";
import * as path from "path";

export async function runAnalysis(
  context: vscode.ExtensionContext
): Promise<void> {
  try {
    // Step 1: Fetch the configuration from .vscode/settings.json
    const config = vscode.workspace.getConfiguration("kai-webview");
    const analysisFormData = config.get<any>("analysisFormData");

    if (!analysisFormData) {
      throw new Error("No analysis form data found in .vscode/settings.json");
    }

    // Step 2: Build the arguments for the kantra binary
    const args: string[] = ["analyze"];

    const workspaceFolders = vscode.workspace.workspaceFolders;

    if (workspaceFolders && workspaceFolders.length > 0) {
      // Return the first workspace folder's path
      args.push("--input", workspaceFolders[0].uri.fsPath);
    }

    if (analysisFormData.targets) {
      args.push("--target", analysisFormData.targets.join(","));
    }

    if (analysisFormData.sources) {
      args.push("--source", analysisFormData.sources.join(","));
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

    // Step 4: Execute the binary using child_process.execFile
    cp.execFile(kantraPath, args, (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(
          `Analysis failed: ${stderr || error.message}`
        );
      } else {
        vscode.window.showInformationMessage(`Analysis complete: ${stdout}`);
      }
    });
  } catch (error: any) {
    vscode.window.showErrorMessage(`Failed to run analysis: ${error.message}`);
  }
}
