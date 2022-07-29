import React, { useState } from "react";
import { IMealInformation } from "../../../../constants/types";
import "./SingleMealDisplay.scss";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../../state";
import { bindActionCreators } from "redux";

interface IProps {
  details: IMealInformation;
}
const SingleMealDisplay: React.FC<IProps> = ({ details }) => {
  const dispatch = useDispatch();
  const mealsIngredients = useSelector(
    (state: State) => state.mealsIngredients
  );
  const mealsSteps = useSelector((state: State) => state.mealSteps);

  const { getMealsIngredients, getMealsSteps } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [isDisplayMealOpen, setIsDisplayMealOpen] = useState(false);

  const getRecipe = (value: number) => {
    getMealsIngredients(value);
    getMealsSteps(value);
  };

  return (
    <>
      <div
        className="singleMeal"
        key={details.id}
        onClick={() => {
          setIsDisplayMealOpen(true);
          getRecipe(+details.id);
        }}
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
          <div className="displayMeal__content">
            <div
              className="exitBtn"
              onClick={() => setIsDisplayMealOpen(false)}
            >
              <GrClose />
            </div>
            <div className="mainInfo">
              <div className="image">
                <img src="images/noimage.png" alt="food" />
              </div>
              <div className="titleAndIngredients">
                <div className="titleBox">
                  <p className="title">{details.name}</p>
                  {details.videoUrl && (
                    <a rel="noreferrer" href={details.videoUrl} target="_blank">
                      VIDEO
                    </a>
                  )}
                </div>

                <div className="ingredientBlock">
                  {mealsIngredients.length > 0 &&
                    mealsIngredients.map((item) => {
                      return (
                        <div className="singleIngredient" key={item.id}>
                          <div className="singleIngredient--image">
                            <img src="images/noimage.png" alt="food" />

                            <p className="ingredientName">{item.name}</p>
                          </div>

                          <div className="singleIngredient--amount">
                            <p>
                              {item.unit && `${item.amount}`}
                              <span>{item.unit && `${item.unit}`}</span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="nutrition">
              <div className="nutrition__content">
                <div className="nutBox">
                  <p>{details.calories ? details.calories : 0}</p>
                  <p>Calories</p>
                </div>
                <div className="nutBox">
                  <p>{details.carbs ? details.carbs : 0}</p>
                  <p>Carbs</p>
                </div>
                <div className="nutBox">
                  <p>{details.fat ? details.fat : 0}</p>
                  <p>Fat</p>
                </div>
                <div className="nutBox">
                  <p>{details.protein ? details.protein : 0}</p>
                  <p>Protein</p>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="recipeSteps">
              <div className="recipeSteps__content">
                {mealsSteps.length > 0 &&
                  mealsSteps.map((item) => {
                    return (
                      <div className="steps" key={item.id}>
                        <div className="steps__content">
                          <div className="stepBlock">
                            <p className="stepTitle">{`Step ${item.title}`}</p>
                            <p className="stepDescription">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMealDisplay;
