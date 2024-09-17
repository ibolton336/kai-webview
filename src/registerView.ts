import * as vscode from "vscode";
import { randomBytes } from "crypto";
import path from "node:path";
import { ViewKey } from "./views";

const DEV_SERVER_HOST = "http://localhost:18080";

const template = (params: {
  csp: string;
  view: ViewKey;
  srcUri: string;
  publicPath: string;
  title: string;
  nonce: string;
}) => `
<!DOCTYPE html>
<html lang="en" class="pf-v5-theme-dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${params.title}</title>
    <meta http-equiv="Content-Security-Policy" content="${params.csp}" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" nonce="${params.nonce}">
      import { render } from "${params.srcUri}";
      render("${params.view}", acquireVsCodeApi(), "${params.publicPath}");
    </script>
  </body>
</html>
`;

const createView = (
  ctx: vscode.ExtensionContext,
  viewId: ViewKey,
  options?: vscode.WebviewOptions
): Promise<vscode.WebviewView> => {
  return new Promise((resolve, reject) => {
    const provider: vscode.WebviewViewProvider = {
      resolveWebviewView: (view, _viewCtx, _token) => {
        try {
          // Set the webview options
          view.webview.options = { ...options };

          // Set the HTML content for the webview
          setViewHtml(ctx, viewId, view.webview);

          // Clean up when the webview is disposed
          view.onDidDispose(() => {
            // Perform any necessary cleanup
          });

          // **Resolve the promise with the view**
          resolve(view);
        } catch (err) {
          console.error("Error resolving webview view:", err);
          reject(err);
        }
      },
    };

    // Register the WebviewViewProvider
    ctx.subscriptions.push(
      vscode.window.registerWebviewViewProvider(viewId, provider)
    );
  });
};

const setViewHtml = <V extends ViewKey>(
  ctx: vscode.ExtensionContext,
  viewId: V,
  webview: vscode.Webview
) => {
  const isProduction = ctx.extensionMode === vscode.ExtensionMode.Production;
  const nonce = randomBytes(16).toString("base64");

  const uri = (...parts: string[]) =>
    webview
      .asWebviewUri(vscode.Uri.file(path.join(ctx.extensionPath, ...parts)))
      .toString(true);

  const publicPath = isProduction ? uri() : `${DEV_SERVER_HOST}/`;
  const srcUri = isProduction ? uri("views.js") : `${DEV_SERVER_HOST}/views.js`;

  const csp = (
    isProduction
      ? [
          `form-action 'none';`,
          `default-src ${webview.cspSource};`,
          `script-src 'nonce-${nonce}' ${webview.cspSource};`,
          `style-src 'unsafe-inline' ${webview.cspSource};`,
          `img-src ${webview.cspSource} data:;`,
          `connect-src ${webview.cspSource};`,
        ]
      : [
          `form-action 'none';`,
          `default-src ${webview.cspSource} ${DEV_SERVER_HOST};`,
          `style-src 'unsafe-inline' ${webview.cspSource} ${DEV_SERVER_HOST};`,
          `script-src 'nonce-${nonce}' ${webview.cspSource} ${DEV_SERVER_HOST};`,
          `img-src ${webview.cspSource} ${DEV_SERVER_HOST} data:;`,
          `connect-src ${webview.cspSource} ${DEV_SERVER_HOST} ws:;`,
        ]
  ).join(" ");

  webview.html = template({
    title: "Example",
    csp,
    srcUri,
    publicPath,
    view: viewId,
    nonce,
  });

  return webview;
};

export const registerView = (
  ctx: vscode.ExtensionContext,
  viewId: ViewKey
): Promise<vscode.WebviewView> => {
  return createView(ctx, viewId, { enableScripts: true });
};
