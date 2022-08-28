import React from "react";
import { IMealInformation } from "../../../../constants/types";
import "./SingleMealDisplay.scss";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../../constants/utilFunc";

interface IProps {
  details: IMealInformation;
}
const SingleMealDisplay: React.FC<IProps> = ({ details }) => {
  const navigate = useNavigate();
  return (
    <div
      className="singleMeal"
      key={details.id}
      onClick={() => navigate(`/meal/${details.id}`)}
    >
      <div className="singleMeal__content">
        <div className="image">
          <img
            src={
              details.img
                ? `${baseUrl()}/uploads/${details.img}`
                : "images/noimage.png"
            }
            alt="meal"
          />
        </div>
        <p className="mealTitle">{details.name}</p>
        <div className="singleMeal-info">
          <p className="mealCalories">
            Calories <span>{details.calories ?? "0"}</span>
          </p>
          <p className="mealPrice">
            Price <span>{details.price ?? "0"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMealDisplay;
