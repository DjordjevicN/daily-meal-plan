import React from "react";
import ButtonShell from "../../../UiComponents/atom/ButtonShell/ButtonShell";
import "./PlanDisplay.scss";

const PlanDisplay = () => {
  return (
    <div className="planDisplay">
      <div className="planDisplay__content">
        <div className="image">
          <img src="/images/mealPlaceholder.png" alt="" />
        </div>
        <div className="info">
          <p className="name">plan name</p>
          <p className="price">
            Price: <span>3000</span>
          </p>
          <p className="calorieRange">
            Calorie range: <span>2600 - 3100</span>
          </p>
        </div>
        <div className="actions">
          <ButtonShell>Activate</ButtonShell>
          <ButtonShell>Share</ButtonShell>
        </div>
      </div>
    </div>
  );
};

export default PlanDisplay;
