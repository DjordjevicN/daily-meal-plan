import React, { useState, useEffect } from "react";
import { FiMinus } from "react-icons/fi";
import "./addedIngredientItem.scss";
import { baseUrl } from "../../../../constants/utilFunc";

interface IIngredient {
  id: number | string;
  name: string;
  img?: string;
  amount: number | string;
  unit: string;
}
interface IProps {
  ingredient: IIngredient;
  handleRemoveIngredient: (value: number | string) => void;
  updateAmountsOfIng: (value: IIngredient) => void;
}

const AddedIngredientItem: React.FC<IProps> = ({
  ingredient,
  handleRemoveIngredient,
  updateAmountsOfIng,
}) => {
  const [ingState, setIngState] = useState(ingredient);

  useEffect(() => {
    updateAmountsOfIng(ingState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingState]);

  return (
    <div className="addedIngredientItem">
      <div className="addedIngredientItem__content">
        <div className="image">
          <img
            src={
              ingredient.img
                ? `${baseUrl()}/uploads/${ingredient.img}`
                : "images/noimage.png"
            }
            alt="meal"
          />
        </div>
        <div className="ingName">
          <p>{ingredient.name}</p>
        </div>
        <div className="measurementInputs">
          <input
            value={ingredient.amount}
            type="number"
            onChange={(e) =>
              setIngState({ ...ingState, amount: +e.target.value })
            }
          />
          <select
            value={ingredient.unit}
            onChange={(e) => setIngState({ ...ingState, unit: e.target.value })}
          >
            <option value="gr">gr</option>
            <option value="Kg">Kg</option>
            <option value="piece">piece</option>
            <option value="cup">cup</option>
            <option value="ml">ml</option>
            <option value="dl">dl</option>
            <option value="L">L</option>
            <option value="cm">cm</option>
            <option value="m">m</option>
          </select>
        </div>
        <div
          className="removeBTN"
          onClick={() => handleRemoveIngredient(ingredient.id)}
        >
          <FiMinus />
        </div>
      </div>
    </div>
  );
};

export default AddedIngredientItem;
