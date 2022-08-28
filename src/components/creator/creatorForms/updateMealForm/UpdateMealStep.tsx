import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../../state";
import { bindActionCreators } from "redux";
import ButtonShell from "../../../../UiComponents/atom/ButtonShell/ButtonShell";
import InputField from "../../../../UiComponents/atom/input/InputField";
import TextAreaInput from "../../../../UiComponents/atom/TextAreaInput/TextAreaInput";

interface IProps {
  step: any;
}

const UpdateMealStep: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const [newStep, setNewStep] = useState({
    id: props.step.id,
    title: props.step.title,
    description: props.step.description,
  });

  const { updateMealSteps } = bindActionCreators(actionCreators, dispatch);

  const handleUpdate = () => {
    updateMealSteps(newStep);
    setOpenEdit(false);
  };
  return (
    <div className="updateMealStep">
      <div className="updateMealStep__content">
        {openEdit ? (
          <div className="form">
            <InputField
              type="text"
              value={newStep.title}
              change={(inputValue: string | number) =>
                setNewStep({ ...newStep, title: inputValue })
              }
              placeholder="Step Number"
            />

            <TextAreaInput
              placeholder="Step Description"
              value={newStep.description}
              change={(inputValue: string) =>
                setNewStep({ ...newStep, description: inputValue })
              }
            />
          </div>
        ) : (
          <div className="stepDisplay">
            <h2 className="stepTitle">{`Step ${props.step.title}`}</h2>
            <p className="stepDescription">{props.step.description}</p>
          </div>
        )}
        <div className="actions">
          <ButtonShell
            customStyle={{ width: "30px" }}
            type="mono"
            onClick={() => setOpenEdit(!openEdit)}
          >
            {openEdit ? "Close" : "Edit"}
          </ButtonShell>
          {openEdit && (
            <ButtonShell type="mono" onClick={handleUpdate}>
              Save changes
            </ButtonShell>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateMealStep;
