import React, { useState, useEffect } from "react";
import "./createMealForm.scss";
import { BsSearch } from "react-icons/bs";
import AddedIngredientItem from "../../creatorComponents/addedIngredientItem/AddedIngredientItem";
import SearchResultItem from "../../creatorComponents/searchResultItem/SearchResultItem";
import { RiAddCircleLine } from "react-icons/ri";
import AddStepInput from "../../creatorComponents/addStepInput/AddStepInput";

const CreateMealForm = () => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput.length >= 2) {
      handleSearch(searchInput);
    }
  }, [searchInput]);
  const handleSearch = (searchInput: string) => {
    console.log("RADI", searchInput);
  };

  const searchEmpty = true;

  return (
    <div className="createMealForm">
      <div className="createMealForm__content">
        <div className="mainInfo">
          <div className="mainInfo__content">
            <p className="formName">Main info</p>
            <div className="form">
              <div className="formInput">
                <p className="label">Name</p>
                <input type="text" />
              </div>
              <div className="formInput">
                <p className="label">Image</p>
                <input type="file" />
              </div>
              <div className="formInput">
                <p className="label">Video URL</p>
                <input type="text" />
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
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Find Ingredient"
                />
                <div className="searchButton">
                  <BsSearch />
                </div>
              </div>
              <div className="searchResults">
                <div className="searchResults__content">
                  {!searchEmpty ? (
                    <div className="emptySearch">
                      <p>There is no ingredient</p>
                      <p>
                        You can add it in section below{" "}
                        <span>"Create Ingredient"</span>{" "}
                      </p>
                    </div>
                  ) : (
                    <SearchResultItem />
                  )}
                </div>
              </div>
            </div>
            <div className="addedIngredients">
              <div className="addedIngredients__content">
                <AddedIngredientItem />
                <AddedIngredientItem />
                <AddedIngredientItem />
                <AddedIngredientItem />
                <AddedIngredientItem />
                <AddedIngredientItem />
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
      </div>
    </div>
  );
};

export default CreateMealForm;
