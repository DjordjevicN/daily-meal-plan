import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { MdModeEditOutline } from "react-icons/md";
import ButtonShell from "../../../../UiComponents/atom/ButtonShell/ButtonShell";
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
      identNum: step.id ?? step.identNum,
      stepNum: step.title ?? stepNum,
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
                value={step.title ?? stepNum}
                onChange={(e) => setStepNum(+e.target.value)}
              />
              <p>Description</p>
              <textarea
                value={description}
                className="textareaInput"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <ButtonShell
              type="mono"
              customStyle={{ margin: "30px auto", width: "50%" }}
              onClick={() => {
                handleUpdateStep();
                setIsEditOpen(false);
              }}
            >
              <p>Update Step</p>
            </ButtonShell>
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
