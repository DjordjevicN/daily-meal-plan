import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { MdModeEditOutline } from "react-icons/md";
import "./addedStepItem.scss";

interface ISteps {
  id?: number | string;
  identNum: number | string;
  stepNum: number | string;
  description: string;
  title?: number | string;
}

interface IProps {
  step: ISteps;
  removeStep: (value: number) => void;
  updateStep: (value: ISteps) => void;
}

const AddedStepItem: React.FC<IProps> = ({ step, removeStep, updateStep }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [stepNum, setStepNum] = useState(step.stepNum);
  const [description, setDescription] = useState(step.description);

  const handleUpdateStep = () => {
    if (description.length < 5 && stepNum === 0) return;

    const newStep = {
      identNum: step.identNum ?? step.id,
      stepNum: stepNum ?? step.title,
      description: description,
    };

    updateStep(newStep);
  };

  return (
    <div className="addedStep">
      <div className="actions">
        <div className="EditBtn" onClick={() => setIsEditOpen(!isEditOpen)}>
          <MdModeEditOutline />
        </div>
        <div className="exitBtn" onClick={() => removeStep(+step.identNum)}>
          <GrClose />
        </div>
      </div>
      {isEditOpen ? (
        <div className="updateStepInput">
          <div className="updateStepInput__content">
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
            <div
              className="updateBTN"
              onClick={() => {
                handleUpdateStep();
                setIsEditOpen(false);
              }}
            >
              <p>Update Step</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="addedStep__content">
          <p className="stepNum">{`Step ${step.title ?? step.stepNum}`}</p>
          <p className="stepDescription">{step.description}</p>
        </div>
      )}
    </div>
  );
};

export default AddedStepItem;
