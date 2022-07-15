import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../state";
import { IIngredients } from "../../../types/databaseTypes";

interface IProps {
  ingredient: IIngredients;
  calculateHowMuchToBuy: () => number;
}
const BuyAndEditModal: React.FC<IProps> = (props) => {
  const [enableButtons, setEnableButtons] = useState(true);
  const [openEditIngredientModal, setOpenEditIngredientModal] = useState(false);

  const dispatch = useDispatch();
  const { deleteIngredients } = bindActionCreators(actionCreators, dispatch);

  const handleDeleteIngredient = () => {
    deleteIngredients(props.ingredient.id);
  };

  return (
    <div className="buyModal">
      <div className="content">
        <input
          type="number"
          value={props.calculateHowMuchToBuy()}
          onChange={(e) => console.log(e.target.value)}
        />
        {openEditIngredientModal && <div className="editInputs">lol</div>}

        <button onClick={() => console.log("Both exact amount")}>Add</button>
        <button
          disabled={enableButtons}
          onClick={() => handleDeleteIngredient()}
        >
          Delete
        </button>
        <button
          disabled={enableButtons}
          onClick={() => setOpenEditIngredientModal(!openEditIngredientModal)}
        >
          Edit
        </button>
        <button onClick={() => setEnableButtons(!enableButtons)}>
          {enableButtons ? "Enable" : "Disable"}
        </button>
      </div>
    </div>
  );
};

export default BuyAndEditModal;
