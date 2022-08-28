import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import UpdateMealForm from "../../components/creator/creatorForms/updateMealForm/UpdateMealForm";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import { IMealIngredientDisplay } from "../../constants/types";
import Modal from "../../UiComponents/template/Modal/Modal";
import { baseUrl } from "../../constants/utilFunc";
import { bindActionCreators } from "redux";
import "./SingleMealPage.scss";
import { BiArrowBack } from "react-icons/bi";

const SingleMealPage = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const mealDisplay = useSelector((state: State) => state.mealDisplay);
  const user = useSelector((state: State) => state.user);

  const { getMealsIngredients, getMealsSteps, getMealById, deleteMeal } =
    bindActionCreators(actionCreators, dispatch);

  const [editView, setEditView] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const getRecipe = (value: number) => {
    getMealsIngredients(value);
    getMealsSteps(value);
    getMealById(value);
  };

  useEffect(() => {
    getRecipe(+params.id!);
  }, []);

  const handleDeleteMeal = () => {
    const data = {
      userId: +user.id,
      mealId: +params.id!,
    };
    deleteMeal(data);
  };

  return (
    <div className="singleMealPage">
      {openModal && (
        <Modal
          close={() => setOpenModal(false)}
          proceed={() => handleDeleteMeal()}
        >
          Do you want to DELETE this meal?
        </Modal>
      )}
      <div className="goBack">
        <Link to="/dashboard">
          <ButtonShell icon={<BiArrowBack />} type="mono">
            Go Back
          </ButtonShell>
        </Link>
      </div>
      <div className="singleMealPage__content">
        {editView ? (
          <div className="updateModal">
            <UpdateMealForm
              details={mealDisplay}
              mealsSteps={mealDisplay.mealSteps}
              mealsIngredients={mealDisplay?.mealsIngredients}
            />
          </div>
        ) : (
          <div>
            <div className="mainInfo">
              <div className="image">
                <img
                  src={
                    mealDisplay?.img
                      ? `${baseUrl()}/uploads/${mealDisplay?.img}`
                      : "images/noimage.png"
                  }
                  alt="meal"
                />
              </div>
              <div className="titleAndNutrition">
                <p className="title">{mealDisplay?.name}</p>

                <div className="nutrition">
                  <div className="nutrition__content">
                    <p>
                      Calories <span>0</span>
                    </p>

                    <p>
                      Carbs <span>0</span>
                    </p>

                    <p>
                      Fat <span>0</span>
                    </p>

                    <p>
                      Protein <span>0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ingAndSteps">
              <div className="ingredientBlock">
                {mealDisplay?.mealsIngredients.length > 0 &&
                  mealDisplay?.mealsIngredients.map(
                    (item: IMealIngredientDisplay) => {
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
                          </div>
                          <p className="ingredientName">{item.name}</p>

                          <div className="singleIngredient--amount">
                            <p>
                              {item.amount && `${item.amount}`}
                              <span>{item.unit && `${item.unit}`}</span>
                            </p>
                          </div>
                        </div>
                      );
                    }
                  )}
              </div>

              <div className="recipeSteps">
                <div className="recipeSteps__content">
                  <div className="display">
                    {mealDisplay?.mealSteps.length > 0 &&
                      mealDisplay?.mealSteps.map((item: any) => {
                        return (
                          <div key={item.id}>
                            <div className="steps">
                              <div className="steps__content">
                                <div className="stepBlock">
                                  <p className="stepTitle">{`Step ${item.title}`}</p>
                                  <p className="stepDescription">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="line"></div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {mealDisplay?.user_id === user.id && (
        <div className="mealControl">
          <div className="mealControl__content">
            <ButtonShell
              type="mono"
              icon={<AiTwotoneDelete />}
              onClick={() => setOpenModal(true)}
            >
              <p>Delete</p>
            </ButtonShell>
            <ButtonShell
              type="mono"
              icon={!editView && <AiFillEdit />}
              onClick={() => setEditView(!editView)}
            >
              <p>{editView ? "Display" : "Edit"}</p>
            </ButtonShell>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleMealPage;
