import React, { useState, useEffect } from "react";
import ButtonShell from "../../../UiComponents/atom/ButtonShell/ButtonShell";
import "./PlanDisplay.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../state";
import { bindActionCreators } from "redux";

interface IProps {
  plan: any;
}

const PlanDisplay = (props: IProps) => {
  const dispatch = useDispatch();
  const { activatePlan } = bindActionCreators(actionCreators, dispatch);
  const user = useSelector((state: State) => state.user);
  const [activated, setActivated] = useState(false);

  const handleActivatePlan = () => {
    const value = {
      userId: user.id,
      plan_id: props.plan.id,
    };
    activatePlan(value);
  };
  useEffect(() => {
    setActivated(user.plan_id === props.plan.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="planDisplay">
      <div className="planDisplay__content">
        <div className="image">
          <img src="/images/mealPlaceholder.png" alt="" />
        </div>
        <div className="info">
          <p className="name">{props.plan.name}</p>
          <p className="price">
            Price: <span>3000</span>
          </p>
          <p className="calorieRange">
            Calorie range: <span>2600 - 3100</span>
          </p>
        </div>
        <div className="actions">
          <ButtonShell
            customStyle={{ color: activated && "#2ab949" }}
            onClick={() => handleActivatePlan()}
          >
            <p>{activated ? "Activated" : "Activate"}</p>
          </ButtonShell>
          {/* <ButtonShell>Share</ButtonShell> */}
        </div>
      </div>
    </div>
  );
};

export default PlanDisplay;
