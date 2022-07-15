import React, { useState } from "react";
import { IIngredients } from "../../types/databaseTypes";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import "./TableRow.scss";
import { color } from "../../constants/color";
import { bindActionCreators } from "redux";

interface IProps {
  ingredient: IIngredients;
}

const TableRow = ({ ingredient }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [enableButtons, setEnableButtons] = useState(true);
  const [openEditIngredientModal, setOpenEditIngredientModal] = useState(false);
  const dispatch = useDispatch();
  const { deleteIngredients } = bindActionCreators(actionCreators, dispatch);
  const calculateHowMuchToBuy = () => {
    return ingredient.base_amount - ingredient.current_amount;
  };
  const calcWhenToBuy = (partialValue: number, totalValue: number) => {
    return (partialValue / 100) * totalValue;
  };
  const indicateIfNeeded = () => {
    return (
      calcWhenToBuy(50, ingredient.base_amount) > ingredient.current_amount
    );
  };
  const handleDeleteIngredient = () => {
    console.log(ingredient.id);
    deleteIngredients(ingredient.id);
  };

  return (
    <>
      <div className="tableRow" onClick={() => setIsOpen(true)}>
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
        <div className="buyModal">
          <div className="content">
            <input
              type="number"
              value={calculateHowMuchToBuy()}
              onChange={(e) => console.log(e.target.value)}
            />
            {openEditIngredientModal && <div className="editInputs">lol</div>}

            <button onClick={() => console.log("Both exact amount")}>
              Add
            </button>
            <button
              disabled={enableButtons}
              onClick={() => handleDeleteIngredient()}
            >
              Delete
            </button>
            <button
              disabled={enableButtons}
              onClick={() =>
                setOpenEditIngredientModal(!openEditIngredientModal)
              }
            >
              Edit
            </button>
            <button onClick={() => setEnableButtons(!enableButtons)}>
              {enableButtons ? "Enable" : "Disable"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TableRow;
