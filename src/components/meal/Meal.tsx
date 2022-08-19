import React, { useState, useEffect } from "react";

import "./Meal.scss";
import { baseUrl } from "../../constants/utilFunc";
import FoodItems from "../foodItems/FoodItems";
import { FiRefreshCcw } from "react-icons/fi";
import axios from "axios";
import { mealConst } from "../../constants/mealConst";

interface IMeal {
  amount: number;
  day_id: number;
  id: number;
  meal_id: number;
  meal_type: number;
  unit: string;
}

type Props = {
  meal: IMeal;
};
const initState = {
  img: "",
  name: "",
};

const getMeal = async (id: number) => {
  const value = id;
  if (value) {
    const response = await axios.post(`${baseUrl()}/get_meal_by_id`, {
      value,
    });
    return response.data[0];
  }
};

const Meal: React.FC<Props> = ({ meal }) => {
  const [singleMeal, setSingleMeal] = useState(initState);
  useEffect(() => {
    getMeal(meal.meal_id).then(setSingleMeal);
  }, [meal.meal_id]);

  return (
    <div className="meal__wrapper ">
      <div className="meal_content">
        <div className="nameAndAction">
          <h3 className="meal_name">{mealConst[meal.meal_type]}</h3>
          <button>I ate this</button>
          <FiRefreshCcw className="icon" />
        </div>
        <p className="calories_count">{`Calories`}</p>
        {singleMeal && <FoodItems meal={meal} food={singleMeal} />}
      </div>
    </div>
  );
};

export default Meal;
