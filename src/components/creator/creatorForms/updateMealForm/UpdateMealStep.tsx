import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../../state";
import { bindActionCreators } from "redux";

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
            <p>Step</p>
            <input
              type="text"
              value={newStep.title}
              onChange={(e) =>
                setNewStep({ ...newStep, title: e.target.value })
              }
            />
            <p>Description</p>
            <textarea
              value={newStep.description}
              onChange={(e) =>
                setNewStep({ ...newStep, description: e.target.value })
              }
            />
          </div>
        ) : (
          <div className="stepDisplay">
            <h2>{`Step ${props.step.title}`}</h2>
            <p>{props.step.description}</p>
          </div>
        )}
        <div className="actions">
          <button onClick={() => setOpenEdit(!openEdit)}>
            {openEdit ? "Close" : "Edit"}
          </button>
          {openEdit && <button onClick={handleUpdate}>Add changes</button>}
        </div>
      </div>
    </div>
  );
};

export default UpdateMealStep;
