import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Page,
  PageSection,
  PageSectionVariants,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Flex,
  FlexItem,
} from "@patternfly/react-core";
import { WebviewContext } from "./WebviewContext";
import { CogIcon } from "@patternfly/react-icons";

interface AnalyzePageProps {
  onConfigureClick: () => void;
}

export const AnalyzePage: React.FC<AnalyzePageProps> = ({
  onConfigureClick,
}) => {
  const { callApi } = useContext(WebviewContext);
  const [isRunning, setIsRunning] = useState(false);
  const [analysisMessage, setAnalysisMessage] = useState("");

  useEffect(() => {
    // Listen for messages from the extension
    window.addEventListener("message", (event) => {
      const message = event.data; // The message from the extension

      switch (message.type) {
        case "analysisStarted":
          setIsRunning(true);
          setAnalysisMessage("Analysis started...");
          break;
        case "analysisComplete":
          setIsRunning(false);
          setAnalysisMessage(`Analysis complete: ${message.message}`);
          break;
        case "analysisFailed":
          setIsRunning(false);
          setAnalysisMessage(`Analysis failed: ${message.message}`);
          break;
        default:
          break;
      }
    });
  }, []);
  const handleRunAnalysis = async () => {
    try {
      setIsRunning(true);
      await callApi("runAnalysis"); // Use callApi to trigger the analysis
    } catch (error: any) {
      setIsRunning(false);
      setAnalysisMessage(`Analysis failed: ${error?.message as string}`);
    }
  };
  return (
    <Page>
      {/* Page header section (optional) */}
      <PageSection variant={PageSectionVariants.light}>
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <Flex alignItems={{ default: "alignItemsCenter" }}>
                <FlexItem>
                  {/* You can replace this with a PageTitle component if needed */}
                  <h1>KAI IDE Extension 2.0</h1>
                </FlexItem>
                <FlexItem align={{ default: "alignRight" }}>
                  <Button
                    variant="plain"
                    aria-label="Configure"
                    onClick={onConfigureClick}
                    label="Configure"
                  >
                    <CogIcon />
                  </Button>
                </FlexItem>
              </Flex>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </PageSection>

      {/* Main content section */}
      <PageSection>
        {/* <Button onClick={() => callApi("runAnalysis")}>Analyze</Button> */}
        <Button onClick={handleRunAnalysis} isDisabled={isRunning}>
          {isRunning ? "Analyzing..." : "Analyze"}
        </Button>
      </PageSection>
    </Page>
  );
};
