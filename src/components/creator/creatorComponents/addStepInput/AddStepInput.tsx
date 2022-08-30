import React, { useState } from "react";
import ButtonShell from "../../../../UiComponents/atom/ButtonShell/ButtonShell";
import InputField from "../../../../UiComponents/atom/input/InputField";
import TextAreaInput from "../../../../UiComponents/atom/TextAreaInput/TextAreaInput";
import "./addStepInput.scss";

interface ISteps {
  identNum: number | string;
  stepNum: number | string;
  description: string;
}
interface IProps {
  addStep: (value: ISteps) => void;
}
const AddStepInput: React.FC<IProps> = ({ addStep }) => {
  const [stepNum, setStepNum] = useState(1);
  const [description, setDescription] = useState("");

  const handleAddStep = () => {
    if (description.length < 5 && stepNum === 0) return;

    const newStep = {
      identNum: Math.random(),
      stepNum: stepNum,
      description: description,
    };
    addStep(newStep);
    setStepNum(stepNum + 1);
    setDescription("");
  };
  return (
    <div className="addStepInput">
      <div className="addStepInput__content">
        <div className="inputBox">
          <InputField
            type="number"
            placeholder="Step number"
            change={(inputValue: number) => setStepNum(+inputValue)}
          />

          <TextAreaInput
            placeholder="Step Description"
            change={(inputValue: string) => setDescription(inputValue)}
          ></TextAreaInput>
        </div>

        <ButtonShell type="mono" onClick={() => handleAddStep()}>
          <p>Add Step</p>
        </ButtonShell>
      </div>
    </div>
  );
};

export default AddStepInput;
