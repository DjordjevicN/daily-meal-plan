import React from "react";
import { IData } from "../../Types";
import "./Meal.scss";
import FoodItems from "../foodItems/FoodItems";

type Props = {
  meal: IData;
};
const Meal: React.FC<Props> = ({ meal }) => {
  return (
    <div className="meal__wrapper">
      <div className="content">
        <h3 className="meal_name">{meal.name}</h3>
        <p className="calories_count">{`Calories`}</p>
        {meal.contents.map((food) => {
          return <FoodItems food={food} key={food.id} />;
        })}
      </div>
    </div>
  );
};

export default Meal;
