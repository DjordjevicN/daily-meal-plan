import React, { useState, useEffect } from "react";
import { IData } from "../../constants/types";
import "./Meal.scss";
import { baseUrl } from "../../constants/utilFunc";
import FoodItems from "../foodItems/FoodItems";
import { FiRefreshCcw } from "react-icons/fi";
import axios from "axios";
import { mealConst } from "../../constants/mealConst";
type Props = {
  meal: any;
};
const initState = {
  img: "",
  name: "",
};
const Meal: React.FC<Props> = ({ meal }) => {
  const [singleMeal, setSingleMeal] = useState(initState);
  useEffect(() => {
    getMeal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMeal = async () => {
    const value = meal.meal_id;
    if (value) {
      const response = await axios.post(`${baseUrl()}/get_meal_by_id`, {
        value,
      });

      setSingleMeal(response.data[0]);
    }
  };
  console.log(singleMeal);

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
