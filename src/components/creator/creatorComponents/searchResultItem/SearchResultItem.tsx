import React from "react";
import { IIngredients } from "../../../../constants/types";
import "./searchResultItem.scss";
import { baseUrl } from "../../../../constants/utilFunc";

interface IIngredient {
  id: number | string;
  name: string;
  img?: string;
  amount: number | string;
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
          <img
            src={
              ingredientInfo.img
                ? `${baseUrl()}/uploads/${ingredientInfo.img}`
                : "images/noimage.png"
            }
            alt="meal"
          />
        </div>
        <div className="resultName">
          <p>{ingredientInfo.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
