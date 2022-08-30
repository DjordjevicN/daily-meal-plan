import React, { useState, useEffect } from "react";
import "./createMealForm.scss";
import { BsSearch } from "react-icons/bs";
import AddedIngredientItem from "../../creatorComponents/addedIngredientItem/AddedIngredientItem";
import SearchResultItem from "../../creatorComponents/searchResultItem/SearchResultItem";

import AddStepInput from "../../creatorComponents/addStepInput/AddStepInput";
import AddedStepItem from "../../creatorComponents/addedStepItem/AddedStepItem";
import { createMealInitState } from "../../../../constants/initStates";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../../state";
import { bindActionCreators } from "redux";
import ButtonShell from "../../../../UiComponents/atom/ButtonShell/ButtonShell";
import InputField from "../../../../UiComponents/atom/input/InputField";

interface IIngredient {
  id: number | string;
  name: string;
  img?: string;
  amount: number | string;
  unit: string;
}
interface ISteps {
  id?: number | string;
  identNum: number | string;
  stepNum: number | string;
  description: string;
}
interface IMeal {
  id: number;
  user_id: number | string;
  name: string;
  img: any;
  videoUrl: string;
  ingredients: IIngredient[];
  steps: ISteps[];
}
interface IProps {
  setIsCreateMeal?: React.Dispatch<React.SetStateAction<boolean>>;
  isUpdate?: boolean;
  // mealInfo?: any;
  setIsDisplayMealOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  // setEditView?: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateMealForm: React.FC<IProps> = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [newMeal, setNewMeal] = useState<IMeal>(createMealInitState);

  const dispatch = useDispatch();
  const searchResults = useSelector((state: State) => state.ingredientSearch);
  const user = useSelector((state: State) => state.user);

  const { getIngredientByName, createMeal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    if (searchInput.length >= 2) {
      handleSearch(searchInput);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);
  useEffect(() => {
    setNewMeal({ ...newMeal, user_id: user.id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (value: string) => {
    getIngredientByName(value);
  };
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
  const addStep = (value: ISteps) => {
    let newStep = [...newMeal.steps, value];
    setNewMeal({ ...newMeal, steps: newStep });
  };
  const removeStep = (stepIdentNum: number) => {
    let newIng = newMeal.steps.filter((item) => item.identNum !== stepIdentNum);
    setNewMeal({ ...newMeal, steps: newIng });
  };
  const updateStep = (value: ISteps) => {
    const currentIng = newMeal.steps;
    let updatedValues = currentIng.map((item) => {
      if (item.identNum === value.identNum || value.identNum === item.id) {
        item.stepNum = value.stepNum;
        item.description = value.description;
      }
      return item;
    });

    setNewMeal({ ...newMeal, steps: updatedValues });
  };
  const handleSubmit = () => {
    createMeal(newMeal);
    setNewMeal(createMealInitState);
    props.setIsCreateMeal && props.setIsCreateMeal(false);
  };

  return (
    <div className="createMealForm">
      <div className="createMealForm__content">
        <div className="mainInfo">
          <div className="mainInfo__content">
            <p className="formName">Main info</p>
            <div className="form">
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
                <InputField
                  placeholder="Name"
                  change={(inputValue: string) => {
                    setNewMeal({ ...newMeal, name: inputValue });
                  }}
                />
              </div>

              <div className="formInput">
                <InputField
                  placeholder="Video URL"
                  change={(inputValue: string) => {
                    setNewMeal({ ...newMeal, videoUrl: inputValue });
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
              <InputField
                icon={<BsSearch />}
                change={(inputValue: string) => setSearchInput(inputValue)}
                placeholder="Find Ingredient"
              />

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
            </div>
            <div className="steps">
              <AddStepInput addStep={addStep} />
              <div className="displaySteps">
                <div className="displaySteps__content">
                  {newMeal.steps.length > 0 &&
                    newMeal.steps.map((step) => {
                      return (
                        <AddedStepItem
                          step={step}
                          key={step.id}
                          removeStep={removeStep}
                          updateStep={updateStep}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonShell
          customStyle={{ margin: "50px auto" }}
          type="mono"
          onClick={() => handleSubmit()}
        >
          Create
        </ButtonShell>
      </div>
    </div>
  );
};

export default CreateMealForm;
