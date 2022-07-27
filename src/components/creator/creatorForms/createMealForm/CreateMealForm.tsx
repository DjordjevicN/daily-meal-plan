import React, { useState, useEffect } from "react";
import "./createMealForm.scss";
import { BsSearch } from "react-icons/bs";
import AddedIngredientItem from "../../creatorComponents/addedIngredientItem/AddedIngredientItem";
import SearchResultItem from "../../creatorComponents/searchResultItem/SearchResultItem";
import { RiAddCircleLine } from "react-icons/ri";
import AddStepInput from "../../creatorComponents/addStepInput/AddStepInput";
import { createMealInitState } from "../../../../constants/initStates";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../../state";
import { bindActionCreators } from "redux";

interface IIngredient {
  id: number | string;
  name: string;
  img: string;
  amount: number;
  unit: string;
}
interface ISteps {
  id: number | string;
  stepNum: number;
  description: string;
}
interface IMeal {
  id: number;
  user_id: number;
  name: string;
  image: string;
  videoUrl: string;
  ingredients: IIngredient[];
  steps: ISteps[];
}

const CreateMealForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [newMeal, setNewMeal] = useState<IMeal>(createMealInitState);

  const dispatch = useDispatch();
  const searchResults = useSelector((state: State) => state.ingredientSearch);
  const { getIngredientByName } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    if (searchInput.length >= 2) {
      handleSearch(searchInput);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const handleSearch = (value: string) => {
    getIngredientByName(value);
  };
  const handleAddIngredient = (ingredient: IIngredient) => {
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
  const handleSubmit = () => {
    console.log(newMeal);
  };

  return (
    <div className="createMealForm">
      <div className="createMealForm__content">
        <div className="mainInfo">
          <div className="mainInfo__content">
            <p className="formName">Main info</p>
            <div className="form">
              <div className="formInput">
                <p className="label">Name</p>
                <input
                  type="text"
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
                    setNewMeal({ ...newMeal, image: e.target.value });
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
        <div className="ingredientsNeeded">
          <div className="ingredientsNeeded__content">
            <p className="formName">Ingredients</p>
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
        <div className="cookingSteps">
          <div className="cookingSteps__content">
            <div className="titleAndAction">
              <p className="formName">Steps</p>
              <div className="addBTN">
                <RiAddCircleLine />
                <p>Add Step</p>
              </div>
            </div>
            <div className="steps">
              <AddStepInput />
              <AddStepInput />
            </div>
          </div>
        </div>
        <p className="submitBTN" onClick={() => handleSubmit()}>
          Create
        </p>
      </div>
    </div>
  );
};

export default CreateMealForm;
