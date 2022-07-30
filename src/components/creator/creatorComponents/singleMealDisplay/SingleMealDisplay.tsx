import React, { useState } from "react";
import { IMealInformation } from "../../../../constants/types";
import "./SingleMealDisplay.scss";
import { GrClose } from "react-icons/gr";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../../state";
import { bindActionCreators } from "redux";
import { baseUrl } from "../../../../constants/utilFunc";

interface IProps {
  details: IMealInformation;
}
const SingleMealDisplay: React.FC<IProps> = ({ details }) => {
  const dispatch = useDispatch();
  const mealsIngredients = useSelector(
    (state: State) => state.mealsIngredients
  );
  const mealsSteps = useSelector((state: State) => state.mealSteps);
  const user = useSelector((state: State) => state.user);

  const { getMealsIngredients, getMealsSteps, deleteMeal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [isDisplayMealOpen, setIsDisplayMealOpen] = useState(false);

  const getRecipe = (value: number) => {
    getMealsIngredients(value);
    getMealsSteps(value);
  };
  const handleDeleteMeal = () => {
    const data = {
      userId: +user.id,
      mealId: +details.id,
    };
    deleteMeal(data);
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
            <img
              src={
                details.img
                  ? `${baseUrl()}/uploads/${details.img}`
                  : "images/noimage.png"
              }
              alt="meal"
            />
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
                <img
                  src={
                    details.img
                      ? `${baseUrl()}/uploads/${details.img}`
                      : "images/noimage.png"
                  }
                  alt="meal"
                />
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
                            <img
                              src={
                                item.img
                                  ? `${baseUrl()}/uploads/${item.img}`
                                  : "images/noimage.png"
                              }
                              alt="meal"
                            />

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
            {details.user_id === user.id && (
              <div className="mealControl">
                <div className="mealControl__content">
                  <div className="deleteBtn" onClick={() => handleDeleteMeal()}>
                    <AiTwotoneDelete />
                    <p>Delete Meal</p>
                  </div>
                  <div
                    className="editBtn"
                    // onClick={() => setIsDisplayMealOpen(false)}
                  >
                    <AiFillEdit />
                    <p>Edit Meal</p>
                  </div>
                </div>
              </div>
            )}

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
