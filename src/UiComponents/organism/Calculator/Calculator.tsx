import React, { useState } from "react";
import InputField from "../../atom/input/InputField";
import Paper from "../../atom/paper/Paper";
import "./Calculator.scss";
import { VscPerson } from "react-icons/vsc";
import { CgGym } from "react-icons/cg";
import { GiStairsGoal } from "react-icons/gi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { AiOutlineColumnWidth, AiOutlineColumnHeight } from "react-icons/ai";
import { ICaloriesCalculateState } from "../../../constants/types";
import { calorieCalculatorInitState } from "../../../constants/initStates";
import { calculateCalorie } from "../../../constants/utilFunc";
import SelectInput from "../../atom/SelectInput/SelectInput";
import InputButton from "../../atom/InputButton/InputButton";

const Calculator = () => {
  const [formState, setFormState] = useState<ICaloriesCalculateState>(
    calorieCalculatorInitState
  );
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="calculator-wrapper">
      {showResult ? (
        <Paper>
          <div className="result">
            <h1>Based on Our calculations you need to eat </h1>
            <h1 className="number">{`${calculateCalorie(formState)}`}</h1>
            <h1>Calories a day</h1>
          </div>
        </Paper>
      ) : (
        <Paper style={{ maxWidth: "800px" }}>
          <form onSubmit={handleSubmit}>
            <InputField
              type="number"
              change={(inputValue: string) =>
                setFormState({ ...formState, age: +inputValue })
              }
              placeholder="Age"
              icon={<VscPerson />}
            />

            <InputField
              type="number"
              change={(inputValue: string) =>
                setFormState({ ...formState, weight: +inputValue })
              }
              placeholder="Weight"
              icon={<AiOutlineColumnWidth />}
            />
            <InputField
              type="number"
              change={(inputValue: string) =>
                setFormState({ ...formState, height: +inputValue })
              }
              placeholder="Height"
              icon={<AiOutlineColumnHeight />}
            />
            <SelectInput
              placeholder="Gender"
              icon={<BsGenderAmbiguous />}
              change={(inputValue: string) =>
                setFormState({ ...formState, goal: +inputValue })
              }
              options={[
                { id: 1, value: "male", option: "Male" },
                { id: 2, value: "female", option: "Female" },
              ]}
            />
            <SelectInput
              change={(inputValue: string) =>
                setFormState({ ...formState, activity: +inputValue })
              }
              placeholder="Activity level"
              icon={<CgGym />}
              options={[
                { id: 1, value: -400, option: "Low" },
                { id: 2, value: 100, option: "Medium" },
                { id: 3, value: 400, option: "High" },
              ]}
            />
            <SelectInput
              change={(inputValue: string) =>
                setFormState({ ...formState, goal: +inputValue })
              }
              options={[
                { id: 1, value: 20, option: "Weight loss" },
                { id: 2, value: 0, option: "Maintain weight" },
                { id: 3, value: 15, option: "Weight gain" },
              ]}
              placeholder="Your Goal"
              icon={<GiStairsGoal />}
            />
            <InputButton>
              <input type="submit" value="Calculate" />
            </InputButton>
          </form>
        </Paper>
      )}
    </div>
  );
};

export default Calculator;
