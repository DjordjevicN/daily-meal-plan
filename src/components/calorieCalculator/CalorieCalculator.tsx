import React, { useState } from "react";
import "./CalorieCalculator.scss";
import { calorieCalculatorInitState } from "../../constants/initStates";
import { ICaloriesCalculateState } from "../../constants/types";
import { calculateCalorie } from "../../constants/utilFunc";

const CalorieCalculator = () => {
  const [formState, setFormState] = useState<ICaloriesCalculateState>(
    calorieCalculatorInitState
  );
  const [showResult, setShowResult] = useState(false);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(calculateCalorie(formState));
    setShowResult(true);
  };

  return (
    <div className="calculator_wrapper">
      <div className="content">
        <h2 className="title">How many calories do i need to eat</h2>
        <div className="calculation">
          {showResult ? (
            <h1>{calculateCalorie(formState)}</h1>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="inputBlock">
                <p className="inputLabel">
                  Age <span>*</span>
                </p>
                <div className="inputEl">
                  <input
                    type="text"
                    value={formState.age}
                    onChange={(e) => {
                      setFormState({ ...formState, age: +e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="inputBlock">
                <p className="inputLabel">
                  Gender <span>*</span>
                </p>
                <div className="inputEl">
                  <select
                    name="Gender"
                    onChange={(e) => {
                      setFormState({ ...formState, gender: e.target.value });
                    }}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="inputBlock">
                <p className="inputLabel">
                  Weight <span>*</span>
                </p>
                <div className="inputEl">
                  <input
                    type="text"
                    value={formState.weight}
                    onChange={(e) => {
                      setFormState({ ...formState, weight: +e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="inputBlock">
                <p className="inputLabel">
                  Height <span>*</span>
                </p>
                <div className="inputEl">
                  <input
                    type="text"
                    value={formState.height}
                    onChange={(e) => {
                      setFormState({ ...formState, height: +e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="inputBlock">
                <p className="inputLabel">
                  Activity <span>*</span>
                </p>
                <div className="inputEl">
                  <select
                    name="activity"
                    onChange={(e) => {
                      setFormState({ ...formState, activity: e.target.value });
                    }}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="heigh">Heigh</option>
                  </select>
                </div>
              </div>
              <div className="inputBlock">
                <p className="inputLabel">
                  Body Fat <span>*</span>
                </p>
                <div className="inputEl">
                  <input
                    type="text"
                    value={formState.bodyFat}
                    onChange={(e) => {
                      setFormState({ ...formState, bodyFat: +e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Calculate" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;