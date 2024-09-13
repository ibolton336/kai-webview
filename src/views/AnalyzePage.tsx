import React, { useContext } from "react";
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
        <Button onClick={() => callApi("runAnalysis")}>Analyze</Button>
      </PageSection>
    </Page>
  );
};
