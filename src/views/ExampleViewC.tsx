import { useForm } from "react-hook-form";
import { Form, FormGroup, Radio, Button } from "@patternfly/react-core";
import { useState } from "react";
import { SimpleSelectBasic } from "../components/SimpleSelectBasic";

// Define the form structure
interface FormData {
  flag: string;
  target: string;
  options: string[];
}

export const ExampleViewC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedTarget, setSelectedTarget] = useState<string>("Empty");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Handle form submission
  const onSubmit = (data: FormData) => {
    console.log("Form data: ", data);
  };

  const handleTargetSelect = (event: any, selection: string) => {
    setSelectedTarget(selection);
    setIsSelectOpen(false);
  };

  const handleOptionsSelect = (event: any, selection: string) => {
    if (selectedOptions.includes(selection)) {
      setSelectedOptions((prev) => prev.filter((item) => item !== selection));
    } else {
      setSelectedOptions((prev) => [...prev, selection]);
    }
  };

  const targetLabels = [
    { name: "Target 1" },
    { name: "Target 2" },
    { name: "Target 3" },
  ];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup label="Select a flag" fieldId="flag-selection">
        <Radio
          {...register("flag")}
          id="flag1"
          name="flag"
          label="Flag 1"
          value="flag1"
        />
        <Radio
          {...register("flag")}
          id="flag2"
          name="flag"
          label="Flag 2"
          value="flag2"
        />
        <Radio
          {...register("flag")}
          id="flag3"
          name="flag"
          label="Flag 3"
          value="flag3"
        />
      </FormGroup>

      {/* Multi-Select for Additional Options */}
      <FormGroup label="Select a target" fieldId="target-selection">
        <SimpleSelectBasic
          selectId={`target-label-menu`}
          toggleId={`target-toggle`}
          toggleAriaLabel="Select label dropdown target"
          aria-label="Select Label"
          value={selectedTarget}
          options={targetLabels.map((label) => ({
            children: label.name,
            value: label.name,
          }))}
          onChange={(option) => {
            handleTargetSelect(null, option);
          }}
        />
      </FormGroup>

      {/* Submit Button */}
      <Button type="submit">Submit</Button>
    </Form>
  );
};
