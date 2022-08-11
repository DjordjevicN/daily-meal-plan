import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../../state";
import { bindActionCreators } from "redux";
interface Step {
  id: number | string;
  img: string;
  ingredients: any[];
  name: string;
  steps: any[];
  user_id: number | string;
  videoUrl: string;
}
interface IProps {
  step: Step;
}

const AddNewStep: React.FC<IProps> = ({ step }) => {
  const dispatch = useDispatch();
  const [newStep, setNewStep] = useState({
    meal_id: step.id,
    title: "",
    description: "",
  });

  useEffect(() => {
    setNewStep({ ...newStep, meal_id: step.id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const { createStep } = bindActionCreators(actionCreators, dispatch);

  const handleAddNewStep = () => {
    createStep(newStep);
  };
  return (
    <div className="addNewStep">
      <div className="addNewStep__content">
        <p className="title">Add new step</p>
        <p className="label">Step number</p>
        <input
          type="text"
          onChange={(e) => setNewStep({ ...newStep, title: e.target.value })}
        />
        <p className="label">Description</p>
        <textarea
          onChange={(e) =>
            setNewStep({ ...newStep, description: e.target.value })
          }
        ></textarea>
        <div className="action">
          <button onClick={handleAddNewStep}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewStep;
