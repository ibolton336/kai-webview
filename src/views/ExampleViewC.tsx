import { useForm } from "react-hook-form";
import {
  Form,
  FormGroup,
  Button,
  TextInput,
  Checkbox,
} from "@patternfly/react-core";
import { useContext, useState } from "react";
import { SimpleSelectCheckbox } from "../components/SimpleSelectCheckbox"; // Import your component
import { WebviewContext } from "./WebviewContext";

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

export const ExampleViewC = () => {
  const { callApi } = useContext(WebviewContext);
  const { register, handleSubmit } = useForm<FormData>();

  const [selectedTargets, setSelectedTargets] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [sourceOnly, setSourceOnly] = useState<boolean>(false); // State for Source Only checkbox
  const [overwrite, setOverwrite] = useState<boolean>(false); // State for Overwrite checkbox
  const [analyzeLibraries, setAnalyzeLibraries] = useState<boolean>(false); // State for Analyze Known Libraries checkbox

  // Handle form submission

  const onSubmit = (data: AnalysisFormData) => {
    data.targets = selectedTargets; // Assign selected targets to form data
    data.sources = selectedSources; // Assign selected sources to form data
    data.sourceOnly = sourceOnly; // Assign state of Source Only checkbox
    data.overwrite = overwrite; // Assign state of Overwrite checkbox
    data.analyzeLibraries = analyzeLibraries; // Assign state of Analyze Known Libraries checkbox
    console.log("Form data: ", data);
    callApi("sendAnalysisFormData", data);
  };

  const targetOptions = [
    { value: "Target 1", label: "Target 1", children: "Target 1" },
    { value: "Target 2", label: "Target 2", children: "Target 2" },
    { value: "Target 3", label: "Target 3", children: "Target 3" },
  ];

  const sourceOptions = [
    { value: "Source 1", label: "Source 1", children: "Source 1" },
    { value: "Source 2", label: "Source 2", children: "Source 2" },
    { value: "Source 3", label: "Source 3", children: "Source 3" },
  ];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Input Directory */}
      <FormGroup label="Input Directory" fieldId="input-directory">
        <TextInput
          {...register("inputDirectory")}
          id="input-directory"
          type="text"
        />
      </FormGroup>

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

      {/* Overwrite Toggle */}
      <FormGroup fieldId="overwrite-toggle">
        <Checkbox
          label="Overwrite"
          id="overwrite"
          isChecked={overwrite} // Controlled checkbox
          onChange={(_, checked) => setOverwrite(checked)} // Update state on change
        />
      </FormGroup>

      {/* Output Directory */}
      <FormGroup label="Output Directory" fieldId="output-directory">
        <TextInput
          {...register("outputDirectory")}
          id="output-directory"
          type="text"
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
