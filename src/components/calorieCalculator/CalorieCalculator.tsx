import React, { useState } from "react";
import "./CalorieCalculator.scss";
import { calorieCalculatorInitState } from "../../constants/initStates";
import { ICaloriesCalculateState } from "../../constants/types";
import { calculateCalorie } from "../../constants/utilFunc";
import { useSelector } from "react-redux";
import { State } from "../../state";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import { bindActionCreators } from "redux";
import { GrClose } from "react-icons/gr";

interface IProps {
  recalculate?: boolean;
  setOpenCalculator?: React.Dispatch<React.SetStateAction<boolean>>;
  exitBtn?: boolean;
}

const CalorieCalculator: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const { updateUsersCalories } = bindActionCreators(actionCreators, dispatch);
  const [formState, setFormState] = useState<ICaloriesCalculateState>(
    calorieCalculatorInitState
  );
  const [showResult, setShowResult] = useState(false);

  const user = useSelector((state: State) => state.user);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowResult(true);
  };
  const updateUserCalories = () => {
    const data = {
      userId: user.id,
      calories: calculateCalorie(formState),
    };
    updateUsersCalories(data);
    props.setOpenCalculator?.(false);
  };
  return (
    <div className="calculator_wrapper">
      {props.exitBtn && (
        <div
          className="exitBtn"
          onClick={() => props.setOpenCalculator?.(false)}
        >
          <GrClose />
        </div>
      )}

      <div className="content">
        <h2 className="title">Let’s Calculate Calorie Needs</h2>
        <div className="calculation">
          {showResult ? (
            <div className="result">
              <h1>{`${calculateCalorie(formState)} cal a day`}</h1>
              <h2>Create account to and start following meal plan</h2>
              <div className="actions">
                {props.recalculate && (
                  <button onClick={() => updateUserCalories()}>
                    Update account
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="inputBlock">
                <p className="inputLabel">
                  Age <span>*</span>
                </p>
                <div className="inputEl">
                  <input
                    type="number"
                    value={formState.age!}
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
                    type="number"
                    value={formState.weight!}
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
                    type="number"
                    value={formState.height!}
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
                      setFormState({
                        ...formState,
                        activity: +e.target.value,
                      });
                    }}
                  >
                    <option value="-400">Low</option>
                    <option value="-100">Medium</option>
                    <option value="400">Heigh</option>
                  </select>
                </div>
              </div>
              <div className="inputBlock">
                <p className="inputLabel">I want to</p>
                <div className="inputEl">
                  <select
                    name="I want to"
                    onChange={(e) => {
                      setFormState({
                        ...formState,
                        goal: +e.target.value,
                      });
                    }}
                  >
                    <option value="20">Weight loss</option>
                    <option value="0">Maintain weight</option>
                    <option value="15">Weight gain</option>
                  </select>
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
