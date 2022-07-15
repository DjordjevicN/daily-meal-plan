import React, { useState } from "react";
import { IIngredients } from "../../types/databaseTypes";
import "./TableRow.scss";
import { color } from "../../constants/color";
import { foodNeededpercentage } from "../../constants/utilVars";
import BuyAndEditModal from "../modals/buyAndEditModal/BuyAndEditModal";

interface IProps {
  ingredient: IIngredients;
}

const TableRow = ({ ingredient }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const calculateHowMuchToBuy = (): number => {
    return ingredient.base_amount - ingredient.current_amount;
  };
  const calcWhenToBuy = (partialValue: number, totalValue: number) => {
    return (partialValue / 100) * totalValue;
  };
  const indicateIfNeeded = () => {
    return (
      calcWhenToBuy(foodNeededpercentage, ingredient.base_amount) >
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
          <p>{`${calculateHowMuchToBuy()} gr`}</p>
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
      {isOpen && (
        <BuyAndEditModal
          calculateHowMuchToBuy={calculateHowMuchToBuy}
          ingredient={ingredient}
        />
      )}
    </>
  );
};

export default TableRow;
