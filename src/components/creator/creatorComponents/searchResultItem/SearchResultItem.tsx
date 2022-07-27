import React from "react";
import { IIngredients } from "../../../../constants/types";
import "./searchResultItem.scss";

interface IIngredient {
  id: number | string;
  name: string;
  img: string;
  amount: number;
  unit: string;
}
interface IProps {
  ingredientInfo: IIngredients;
  handleAddIngredient: (value: IIngredient) => void;
}

const SearchResultItem: React.FC<IProps> = ({
  ingredientInfo,
  handleAddIngredient,
}) => {
  const ingredient = {
    id: ingredientInfo.id,
    name: ingredientInfo.name,
    img: ingredientInfo.img,
    amount: 100,
    unit: "gr",
  };

  return (
    <div className="resultItem" onClick={() => handleAddIngredient(ingredient)}>
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
