import React, { useState } from "react";
import "./addStepInput.scss";

interface ISteps {
  identNum: number;
  stepNum: number;
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
          <p>Step</p>
          <input
            className="stepNum"
            type="number"
            placeholder="Step number"
            value={stepNum}
            onChange={(e) => setStepNum(+e.target.value)}
          />
          <p>Description</p>
          <textarea
            value={description}
            className="textareaInput"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="addBTN" onClick={() => handleAddStep()}>
          <p>Add Step</p>
        </div>
      </div>
    </div>
  );
};

export default AddStepInput;
