import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../state";
import { IIngredients } from "../../../types/databaseTypes";
import "./BuyAndEditModal.scss";
import { initAddIngredientModalState } from "../../../constants/initStates";
import { color } from "../../../constants/color";
interface IProps {
  ingredient: IIngredients;
  calculateHowMuchToBuy: () => number;
}
const BuyAndEditModal: React.FC<IProps> = (props) => {
  const [enableButtons, setEnableButtons] = useState(true);
  const [openEditIngredientModal, setOpenEditIngredientModal] = useState(false);
  const [modalState, setModalState] = useState(initAddIngredientModalState);

  const dispatch = useDispatch();
  const { deleteIngredients } = bindActionCreators(actionCreators, dispatch);

  const handleDeleteIngredient = () => {
    deleteIngredients(props.ingredient.id);
  };

  return (
    <div className="buyModal">
      <div className="content">
        <div className="inputBlock">
          <p className="inputLabel">How much you both</p>
          <div className="inputEl">
            <input
              type="number"
              value={props.calculateHowMuchToBuy()}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>
        {openEditIngredientModal && (
          <div className="editInputs">
            <div className="inputBlock">
              <p className="inputLabel">Name</p>
              <div className="inputEl">
                <input
                  type="text"
                  value={props.ingredient.name}
                  onChange={(e) => {
                    setModalState({ ...modalState, name: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="inputBlock">
              <p className="inputLabel">Price</p>
              <div className="inputEl">
                <input
                  type="number"
                  value={props.ingredient.price}
                  onChange={(e) => {
                    setModalState({
                      ...modalState,
                      price: +e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="inputBlock">
              <p className="inputLabel">Base amount</p>
              <div className="inputEl">
                <input
                  type="number"
                  value={props.ingredient.base_amount}
                  onChange={(e) => {
                    setModalState({
                      ...modalState,
                      base_amount: +e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="inputBlock">
              <p className="inputLabel">Current amount</p>
              <div className="inputEl">
                <input
                  type="number"
                  value={props.ingredient.current_amount}
                  onChange={(e) => {
                    setModalState({
                      ...modalState,
                      current_amount: +e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="inputBlock">
              <p className="inputLabel">Calories</p>
              <div className="inputEl">
                <input
                  type="number"
                  value={props.ingredient.calories}
                  onChange={(e) => {
                    setModalState({
                      ...modalState,
                      calories: +e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="inputBlock">
              <p className="inputLabel">Carbs</p>
              <div className="inputEl">
                <input
                  type="number"
                  value={props.ingredient.carbs}
                  onChange={(e) => {
                    setModalState({
                      ...modalState,
                      carbs: +e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="inputBlock">
              <p className="inputLabel">Fat</p>
              <div className="inputEl">
                <input
                  type="number"
                  value={props.ingredient.fat}
                  onChange={(e) => {
                    setModalState({ ...modalState, fat: +e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="inputBlock">
              <p className="inputLabel">Add image</p>
              <div className="inputEl avatar-input">
                <input
                  alt="avatar"
                  type="file"
                  onChange={(e) => {
                    setModalState({
                      ...modalState,
                      img: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <div className="actionBlock">
          <button
            className="enable-BTN"
            onClick={() => setEnableButtons(!enableButtons)}
          >
            {enableButtons ? "Enable" : "Disable"}
          </button>
          <button
            className="delete-BTN"
            style={{
              backgroundColor: !enableButtons
                ? color.buttonDanger
                : color.buttonDisabled,
            }}
            disabled={enableButtons}
            onClick={() => handleDeleteIngredient()}
          >
            Delete
          </button>
          <button
            className="edit-BTN"
            disabled={enableButtons}
            style={{
              backgroundColor: !enableButtons
                ? color.mainBlue
                : color.buttonDisabled,
            }}
            onClick={() => setOpenEditIngredientModal(!openEditIngredientModal)}
          >
            Edit
          </button>

          <button
            className="add-BTN"
            onClick={() => console.log("Both exact amount")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyAndEditModal;
