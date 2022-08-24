import React from "react";
import InputField from "../../atom/input/InputField";
import Paper from "../../atom/paper/Paper";
import "./Calculator.scss";
import { VscPerson } from "react-icons/vsc";
import { CgGym } from "react-icons/cg";
import { GiStairsGoal } from "react-icons/gi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { AiOutlineColumnWidth, AiOutlineColumnHeight } from "react-icons/ai";

import ColorButton from "../../atom/ColorButton/ColorButton";

const Calculator = () => {
  return (
    <div className="calculator">
      <Paper style={{ maxWidth: "800px" }}>
        <h2>Let’s Calculate Calories Needs</h2>
        <InputField placeholder="Age" icon={<VscPerson />} />
        <InputField placeholder="Gender" icon={<BsGenderAmbiguous />} />
        <InputField placeholder="Weight" icon={<AiOutlineColumnWidth />} />
        <InputField placeholder="Height" icon={<AiOutlineColumnHeight />} />
        <InputField placeholder="Activity" icon={<CgGym />} />
        <InputField placeholder="Your Goal" icon={<GiStairsGoal />} />
        <ColorButton label="Calculate" />
      </Paper>
    </div>
  );
};

export default Calculator;
