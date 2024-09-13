import React, { useState, useEffect, useContext } from "react";
import { ConfigurationForm } from "./ConfigurationForm";
import { WebviewContext } from "./WebviewContext";
import { AnalyzePage } from "./AnalyzePage";

export const AppRoutes: React.FC = () => {
  const { callApi } = useContext(WebviewContext);
  const [hasConfiguration, setHasConfiguration] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<"analyze" | "configure">(
    "analyze"
  ); // Track the current page

  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await callApi("retrieveAndCheckSettings");
      if (settings) {
        setHasConfiguration(true);
      }
    };
    fetchSettings();
  }, [callApi]);

  // Function to handle navigation between pages
  const navigateTo = (page: "analyze" | "configure") => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === "analyze" && (
        <AnalyzePage onConfigureClick={() => navigateTo("configure")} />
      )}
      {currentPage === "configure" && (
        <ConfigurationForm onCancel={() => navigateTo("analyze")} />
      )}
    </div>
  );
};
