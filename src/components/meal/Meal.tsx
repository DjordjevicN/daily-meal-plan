import React from "react";
import { IData } from "../../constants/types";
import "./Meal.scss";
import FoodItems from "../foodItems/FoodItems";
import { FiRefreshCcw } from "react-icons/fi";

type Props = {
  meal: IData;
};
const Meal: React.FC<Props> = ({ meal }) => {
  return (
    <div className="meal__wrapper ">
      <div className="meal_content">
        <div className="nameAndAction">
          <h3 className="meal_name">{meal.name}</h3>
          <button>I ate this</button>
          <FiRefreshCcw className="icon" />
        </div>

        <p className="calories_count">{`Calories`}</p>
        {meal.contents.map((food) => {
          return <FoodItems food={food} key={food.id} />;
        })}
      </div>
    </div>
  );
};

export default Meal;
