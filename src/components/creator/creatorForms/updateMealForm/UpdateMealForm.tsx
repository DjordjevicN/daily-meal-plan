import React, { useState, useEffect } from "react";
import { IMealInformation, IStep } from "../../../../constants/types";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../../state";
import { bindActionCreators } from "redux";
import AddedIngredientItem from "../../creatorComponents/addedIngredientItem/AddedIngredientItem";
import SearchResultItem from "../../creatorComponents/searchResultItem/SearchResultItem";
import { createMealInitState } from "../../../../constants/initStates";

import UpdateMealStep from "./UpdateMealStep";
import AddNewStep from "./AddNewStep";
import "./updateMealForm.scss";

interface IIngredient {
  id: number | string;
  name: string;
  img: string;
  amount: number | string;
  unit: string;
}

interface IMeal {
  id: number;
  user_id: number | string;
  name: string;
  img: any;
  videoUrl: string;
  ingredients: IIngredient[];
  steps: IStep[];
}
interface IProps {
  details: IMealInformation;
  mealsSteps: IStep[];
  mealsIngredients: IIngredient[];
}
const UpdateMealForm: React.FC<IProps> = ({
  details,
  mealsSteps,
  mealsIngredients,
}) => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [newMeal, setNewMeal] = useState<IMeal>(createMealInitState);
  const searchResults = useSelector((state: State) => state.ingredientSearch);

  const { getIngredientByName, updateMeal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    setNewMeal({
      ...newMeal,
      id: +details.id,
      name: details.name,
      videoUrl: details.videoUrl,
      img: details.img,
      user_id: details.user_id,
      ingredients: mealsIngredients,
      steps: mealsSteps,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchInput.length >= 2) {
      handleSearch(searchInput);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);
  const handleSearch = (value: string) => {
    getIngredientByName(value);
  };
  // const addStep = (value: ISteps) => {
  //   let newStep = [...newMeal.steps, value];
  //   setNewMeal({ ...newMeal, steps: newStep });
  // };
  // const removeStep = (stepIdentNum: number) => {
  //   let newIng = newMeal.steps.filter((item) => item.identNum !== stepIdentNum);
  //   setNewMeal({ ...newMeal, steps: newIng });
  // };
  // const updateStep = (value: ISteps) => {
  //   const currentIng = newMeal.steps;
  //   let updatedValues = currentIng.map((item) => {
  //     if (item.id === value.id) {
  //       item.stepNum = value.stepNum;
  //       item.description = value.description;
  //     }
  //     return item;
  //   });

  //   setNewMeal({ ...newMeal, steps: updatedValues });
  // };
  const handleAddIngredient = (ingredient: IIngredient) => {
    const alreadyIn = newMeal.ingredients.find(
      (item) => item.id === ingredient.id
    );
    if (alreadyIn) {
      return;
    }
    let newIng = [...newMeal.ingredients, ingredient];
    setNewMeal({ ...newMeal, ingredients: newIng });
    setSearchInput("");
  };
  const handleRemoveIngredient = (ingredientId: number | string) => {
    let newIng = newMeal.ingredients.filter((item) => item.id !== ingredientId);
    setNewMeal({ ...newMeal, ingredients: newIng });
  };
  const updateAmountsOfIng = (value: IIngredient) => {
    const currentIng = newMeal.ingredients;
    let updatedValues = currentIng.map((item) => {
      if (item.id === value.id) {
        item.amount = value.amount;
        item.unit = value.unit;
      }
      return item;
    });

    setNewMeal({ ...newMeal, ingredients: updatedValues });
  };

  const handleUpdateMeal = () => {
    updateMeal(newMeal);
  };
  return (
    <div className="updateMealForm">
      <div className="updateMealForm__content">
        {/* INFO  */}
        <div className="mainInfo">
          <div className="mainInfo__content">
            <p className="formName">Main info</p>
            <div className="form">
              <div className="formInput">
                <p className="label">Name</p>
                <input
                  type="text"
                  value={newMeal.name}
                  onChange={(e) => {
                    setNewMeal({ ...newMeal, name: e.target.value });
                  }}
                />
              </div>
              <div className="formInput">
                <p className="label">Image</p>
                <input
                  type="file"
                  onChange={(e) => {
                    setNewMeal({
                      ...newMeal,
                      img: e.target.files ? e.target.files[0] : null,
                    });
                  }}
                />
              </div>
              <div className="formInput">
                <p className="label">Video URL</p>
                <input
                  type="text"
                  onChange={(e) => {
                    setNewMeal({ ...newMeal, videoUrl: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* INGREDIENTS  */}

        <div className="ingredientsNeeded">
          <p className="formName">Ingredients</p>
          <div className="ingredientsNeeded__content">
            <div className="ingSearch">
              <div className="inputBlock">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Find Ingredient"
                />
                <div className="searchButton">
                  <BsSearch />
                </div>
              </div>

              {searchInput.length > 1 && (
                <div className="searchResults">
                  <div className="searchResults__content">
                    {searchResults.length > 0 ? (
                      searchResults.map((ingredientInfo) => {
                        return (
                          <SearchResultItem
                            ingredientInfo={ingredientInfo}
                            handleAddIngredient={handleAddIngredient}
                            key={ingredientInfo.id}
                          />
                        );
                      })
                    ) : (
                      <div className="emptySearch">
                        <h4>Loading...</h4>
                        <p>
                          You can add it in section below
                          <span>"Create Ingredient"</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="addedIngredients">
              <div className="addedIngredients__content">
                {newMeal.ingredients.map((ingredient) => {
                  return (
                    <AddedIngredientItem
                      key={ingredient.id}
                      ingredient={ingredient}
                      handleRemoveIngredient={handleRemoveIngredient}
                      updateAmountsOfIng={updateAmountsOfIng}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* COOKING STEPS UPDATE  */}
        <div className="cookingSteps">
          <div className="cookingSteps__content">
            <div className="titleAndAction">
              <p className="formName">Steps</p>
            </div>
            <div className="steps">
              <div className="displaySteps">
                <div className="displaySteps__content">
                  {newMeal.steps.length > 0 &&
                    newMeal.steps.map((step) => {
                      return <UpdateMealStep key={step.id} step={step} />;
                    })}
                </div>
                <AddNewStep step={newMeal} />
              </div>
            </div>
          </div>
        </div>
        <div className="actionBox">
          <button className="updateBTN" onClick={() => handleUpdateMeal()}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateMealForm;
