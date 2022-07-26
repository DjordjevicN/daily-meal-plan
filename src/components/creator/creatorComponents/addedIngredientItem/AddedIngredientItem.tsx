import React from "react";
import { FiMinus } from "react-icons/fi";
import "./addedIngredientItem.scss";

const AddedIngredientItem = () => {
  return (
    <div className="addedIngredientItem">
      <div className="addedIngredientItem__content">
        <div className="image">
          <img src="images/heroimg.png" alt="" />
        </div>
        <div className="ingName">
          <p>Pileca Salata</p>
        </div>
        <div className="measurementInputs">
          <input type="number" />
          <select name="" id="">
            <option value="gr">gr</option>
            <option value="Kg">Kg</option>
            <option value="pease">pease</option>
            <option value="cup">cup</option>
            <option value="ml">ml</option>
            <option value="dl">dl</option>
            <option value="L">L</option>
            <option value="cm">cm</option>
            <option value="m">m</option>
          </select>
        </div>
        <div className="removeBTN" onClick={() => console.log("remove")}>
          <FiMinus />
        </div>
      </div>
    </div>
  );
};

export default AddedIngredientItem;
