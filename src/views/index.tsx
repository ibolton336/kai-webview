import "@patternfly/patternfly/patternfly.css";
import { createRoot } from "react-dom/client";
import { WebviewApi, WithWebviewContext } from "./WebviewContext";
import { ExampleViewA } from "./ExampleViewA";
import { ExampleViewB } from "./ExampleViewB";
import { ExampleViewC } from "./ExampleViewC";

export const Views = {
  exampleViewA: ExampleViewA,
  exampleViewB: ExampleViewB,
  exampleViewC: ExampleViewC,
} as const;

export type ViewKey = keyof typeof Views;

export function render<V extends ViewKey>(
  key: V,
  vscodeApi: WebviewApi,
  publicPath: string,
  rootId = "root"
) {
  const container = document.getElementById(rootId);
  if (!container) {
    throw new Error(`Element with id of ${rootId} not found.`);
  }

  __webpack_public_path__ = publicPath;

  const Component: React.ComponentType = Views[key];

  const root = createRoot(container);
  console.log("vscodeApi", vscodeApi);

  root.render(
    <WithWebviewContext vscodeApi={vscodeApi}>
      <Component />
    </WithWebviewContext>
  );
}
