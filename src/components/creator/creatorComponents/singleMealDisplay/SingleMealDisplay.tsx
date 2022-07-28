import React, { useState } from "react";
import { IMealInformation } from "../../../../constants/types";
import "./SingleMealDisplay.scss";
import { GrClose } from "react-icons/gr";
import { displayPartsToString } from "typescript";

interface IProps {
  details: IMealInformation;
}
const SingleMealDisplay: React.FC<IProps> = ({ details }) => {
  console.log(details);

  const [isDisplayMealOpen, setIsDisplayMealOpen] = useState(false);
  return (
    <>
      <div
        className="singleMeal"
        key={details.id}
        onClick={() => setIsDisplayMealOpen(true)}
      >
        <div className="singleMeal__content">
          <div className="image">
            <img src="images/noimage.png" alt="meal" />
          </div>
          <div className="mealTitle">
            <p>{details.name}</p>
          </div>
        </div>
      </div>

      {isDisplayMealOpen && (
        <div className="displayMeal">
          <div className="exitBtn" onClick={() => setIsDisplayMealOpen(false)}>
            <GrClose />
          </div>
          <div className="displayModal__content">
            <div className="mainInfoAndNutrition">
              <div className="image">
                <img src="images/noimage.png" alt="" />
              </div>
              <div className="titleAndNutrition">
                <div className="title">
                  <p>{details.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMealDisplay;
