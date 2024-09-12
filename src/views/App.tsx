import { useForm } from "react-hook-form";
import { Form, FormGroup, Button, Checkbox } from "@patternfly/react-core";
import { useContext, useEffect, useState } from "react";
import { SimpleSelectCheckbox } from "../components/SimpleSelectCheckbox"; // Import your component
import { WebviewContext } from "./WebviewContext";
import { targetOptions } from "../config/targets";
import { sourceOptions } from "../config/sources";

// Define the form structure
interface FormData {
  inputDirectory: string;
  outputDirectory: string;
  targets: string[];
  sources: string[];
  sourceOnly: boolean;
  overwrite: boolean;
  analyzeLibraries: boolean;
}

export const App = () => {
  const { callApi } = useContext(WebviewContext);
  const { register, handleSubmit } = useForm<FormData>();

  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await callApi("retrieveAndCheckSettings");
      console.log("settings", settings);
      if (settings) {
        setSelectedTargets(settings.targets || []);
        setSelectedSources(settings.sources || []);
        setSourceOnly(settings.sourceOnly || false);
        setAnalyzeLibraries(settings.analyzeLibraries || false);
      }
    };
    fetchSettings();
  }, [callApi]);

  const [selectedTargets, setSelectedTargets] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [sourceOnly, setSourceOnly] = useState<boolean>(false); // State for Source Only checkbox
  const [analyzeLibraries, setAnalyzeLibraries] = useState<boolean>(false); // State for Analyze Known Libraries checkbox

  // Handle form submission

  const onSubmit = (data: AnalysisFormData) => {
    data.targets = selectedTargets; // Assign selected targets to form data
    data.sources = selectedSources; // Assign selected sources to form data
    data.sourceOnly = sourceOnly; // Assign state of Source Only checkbox
    data.analyzeLibraries = analyzeLibraries; // Assign state of Analyze Known Libraries checkbox
    console.log("Form data: ", data);
    callApi("sendAnalysisFormData", data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Target List (Multi-select Checkbox) */}
      <FormGroup label="Select Targets" fieldId="target-selection">
        <SimpleSelectCheckbox
          options={targetOptions}
          value={selectedTargets}
          onChange={setSelectedTargets} // Pass state setter function for multi-select
          placeholderText="Select Targets"
        />
      </FormGroup>

      {/* Source List (Multi-select Checkbox) */}
      <FormGroup label="Select Sources" fieldId="source-selection">
        <SimpleSelectCheckbox
          options={sourceOptions}
          value={selectedSources}
          onChange={setSelectedSources} // Pass state setter function for multi-select
          placeholderText="Select Sources"
        />
      </FormGroup>

      {/* Source Only Toggle */}
      <FormGroup fieldId="source-only-toggle">
        <Checkbox
          label="Source Only"
          id="source-only"
          isChecked={sourceOnly} // Controlled checkbox
          onChange={(_, checked) => setSourceOnly(checked)} // Update state on change
        />
      </FormGroup>

      {/* Analyze Known Libraries Toggle */}
      <FormGroup fieldId="analyze-libraries-toggle">
        <Checkbox
          label="Analyze Known Libraries"
          id="analyze-libraries"
          isChecked={analyzeLibraries} // Controlled checkbox
          onChange={(_, checked) => setAnalyzeLibraries(checked)} // Update state on change
        />
      </FormGroup>

      {/* Submit Button */}
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export interface AnalysisFormData extends FormData {
  targets: string[];
  sources: string[];
  sourceOnly: boolean;
  overwrite: boolean;
  analyzeLibraries: boolean;
}
