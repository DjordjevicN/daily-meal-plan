import React from "react";
import "./addStepInput.scss";

const AddStepInput = () => {
  return (
    <div className="addStepInput">
      <div className="addStepInput__content">
        <div className="stepNum">
          <p>{`Step 1`}</p>
        </div>
        <div className="inputField">
          <textarea className="textareaInput"></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddStepInput;
