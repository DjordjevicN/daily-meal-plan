import React, { useState, useEffect } from "react";
import IngredientEditResults from "../ingredientEditResults/IngredientEditResults";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../../state";
import { bindActionCreators } from "redux";
import { BiSearchAlt2 } from "react-icons/bi";
import "./EditIngredient.scss";
import InputField from "../../../../UiComponents/atom/input/InputField";

const EditIngredient = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const { getIngredientByName, clearSearchState } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const searchResults = useSelector((state: State) => state.ingredientSearch);

  useEffect(() => {
    if (searchInput.length >= 2) {
      getIngredientByName(searchInput);
    } else {
      clearSearchState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <div className="editIngredient">
      <div className="editIngredient__content">
        <div className="searchBox">
          <InputField
            icon={<BiSearchAlt2 />}
            placeholder="Ingredient Search"
            change={(inputValue: string) => setSearchInput(inputValue)}
          />
        </div>
        {searchResults.length > 0 && searchInput.length > 0 && (
          <div className="resultBox">
            {searchResults.map((item) => {
              return <IngredientEditResults ingredient={item} key={item.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditIngredient;
