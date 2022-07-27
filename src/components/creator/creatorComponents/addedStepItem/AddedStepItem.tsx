import React from "react";
import { GrClose } from "react-icons/gr";
import { MdModeEditOutline } from "react-icons/md";
import "./addedStepItem.scss";

interface ISteps {
  stepNum: number;
  description: string;
}

interface IProps {
  step: ISteps;
}

const AddedStepItem: React.FC<IProps> = ({ step }) => {
  return (
    <div className="addedStep">
      <div className="actions">
        <div className="EditBtn" onClick={() => console.log("remove")}>
          <MdModeEditOutline />
        </div>
        <div className="exitBtn" onClick={() => console.log("remove")}>
          <GrClose />
        </div>
      </div>

      <div className="addedStep__content">
        <p className="stepNum">{`Step ${step.stepNum}`}</p>
        <p className="stepDescription">{step.description}</p>
      </div>
    </div>
  );
};

export default AddedStepItem;
