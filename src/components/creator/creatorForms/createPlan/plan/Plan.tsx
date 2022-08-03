import React from "react";
import Day from "../day/Day";
import "./plan.scss";

const Plan = () => {
  return (
    <div className="plan">
      <div className="plan__content">
        <div className="days">
          <div className="days__content">
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
