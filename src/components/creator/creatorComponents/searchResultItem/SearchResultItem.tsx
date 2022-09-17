import React from "react";

import "./searchResultItem.scss";
import { baseUrl } from "../../../../constants/utilFunc";

interface IProps {
  ingredientInfo: any;
  handleAddIngredient: (value: any) => void;
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
    imageCall: ingredientInfo.imageCall,
  };

  return (
    <div className="resultItem" onClick={() => handleAddIngredient(ingredient)}>
      <div className="resultItem__content">
        <div className="image">
          <img
            src={
              ingredient.img
                ? `${baseUrl()}/uploads/${ingredient.img}`
                : ingredient.imageCall
                ? `${ingredient.imageCall}`
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
