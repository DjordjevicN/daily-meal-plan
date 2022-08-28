import React, { useState } from "react";
import { IIngredients } from "../../constants/types";
import "./TableRow.scss";

import {
  // calcWhenToBuy,
  // calculateHowMuchToBuy,
  baseUrl,
} from "../../constants/utilFunc";
import BuyAndEditModal from "../modals/buyAndEditModal/BuyAndEditModal";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";
import { RiShoppingCartLine } from "react-icons/ri";

interface IProps {
  ingredient: IIngredients;
}

const TableRow = ({ ingredient }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // const indicateIfNeeded = () => {
  //   return (
  //     calcWhenToBuy(ingredient.percentage_amount, ingredient.base_amount) >
  //     ingredient.current_amount
  //   );
  // };

  return (
    <div>
      <div className="tableRow" onClick={() => setIsOpen(!isOpen)}>
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
        <div className="nameAndAmount">
          <div className="name">
            <p>{ingredient.name}</p>
          </div>
          <div className="purchaseAmount">
            <p>Buy</p>
            <p className="amount">{`0 gr`}</p>
          </div>
        </div>

        <div className="buyButton">
          <ButtonShell
            type="monoCube"
            customStyle={{
              width: "56px",
              height: "56px",
            }}
          >
            <RiShoppingCartLine />
          </ButtonShell>
        </div>
      </div>
      {isOpen && (
        <BuyAndEditModal ingredient={ingredient} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default TableRow;
