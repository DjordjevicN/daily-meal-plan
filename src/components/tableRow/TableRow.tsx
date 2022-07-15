import React, { useState } from "react";
import { IIngredients } from "../../types/databaseTypes";
import "./TableRow.scss";
import { color } from "../../constants/color";
import { calcWhenToBuy, calculateHowMuchToBuy } from "../../constants/utilFunc";
import BuyAndEditModal from "../modals/buyAndEditModal/BuyAndEditModal";

interface IProps {
  ingredient: IIngredients;
}

const TableRow = ({ ingredient }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const indicateIfNeeded = () => {
    return (
      calcWhenToBuy(ingredient.percentage_amount, ingredient.base_amount) >
      ingredient.current_amount
    );
  };

  return (
    <>
      <div className="tableRow" onClick={() => setIsOpen(!isOpen)}>
        <div
          className="status"
          style={{
            backgroundColor: indicateIfNeeded()
              ? color.mainRed
              : color.mainBlue,
          }}
        ></div>
        <div className="avatar">
          <img src="" alt="" />
        </div>
        <div className="name">
          <p>{ingredient.name}</p>
        </div>
        <div className="purchaseAmount">
          <h6>to buy</h6>
          <p>{`${calculateHowMuchToBuy(
            ingredient.base_amount,
            ingredient.current_amount
          )} gr`}</p>
        </div>
        <div className="currentPrice">
          <h6>current price</h6>
          <p>{`${ingredient.price} din`}</p>
        </div>
        <div className="currentAmount">
          <h6>current amount</h6>
          <p>{`${ingredient.current_amount}`}</p>
        </div>
      </div>
      {isOpen && <BuyAndEditModal ingredient={ingredient} />}
    </>
  );
};

export default TableRow;
