import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../../state";
import { bindActionCreators } from "redux";
import InputField from "../../../../UiComponents/atom/input/InputField";
import TextAreaInput from "../../../../UiComponents/atom/TextAreaInput/TextAreaInput";
import ButtonShell from "../../../../UiComponents/atom/ButtonShell/ButtonShell";
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

        <InputField
          placeholder="Step number"
          change={(inputField: string) =>
            setNewStep({ ...newStep, title: inputField })
          }
        />

        <TextAreaInput
          placeholder="Meal Description"
          change={(inputField: string) =>
            setNewStep({ ...newStep, description: inputField })
          }
        />
        <div className="action">
          <ButtonShell type="mono" onClick={handleAddNewStep}>
            Add
          </ButtonShell>
        </div>
      </div>
    </div>
  );
};

export default AddNewStep;
