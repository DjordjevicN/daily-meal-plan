import React from "react";
import { IData } from "../../Types";
import "./Meal.scss";
import Food from "../food/Food";

type Props = {
  meal: IData;
};
const Meal: React.FC<Props> = ({ meal }) => {
  return (
    <div className="meal__wrapper">
      <div className="content">
        <h3 className="meal_name">{meal.name}</h3>
        <p className="calories_count">{`Calories 456`}</p>
        {meal.contents.map((food) => {
          return <Food food={food} />;
        })}
      </div>
    </div>
  );
};

export default Meal;
