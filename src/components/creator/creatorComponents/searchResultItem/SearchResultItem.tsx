import React from "react";
import { IIngredients } from "../../../../constants/types";
import "./searchResultItem.scss";

interface IProps {
  ingredientInfo: IIngredients;
  handleAddIngredient: (value: number | string) => void;
}

const SearchResultItem: React.FC<IProps> = ({
  ingredientInfo,
  handleAddIngredient,
}) => {
  return (
    <div
      className="resultItem"
      onClick={() => handleAddIngredient(ingredientInfo.id)}
    >
      <div className="resultItem__content">
        <div className="image">
          <img src="images/noimage.png" alt="food" />
          {/* <img src={ingredientInfo.img ?? "images/noimage.png"} alt="food" /> */}
        </div>
        <div className="resultName">
          <p>{ingredientInfo.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
