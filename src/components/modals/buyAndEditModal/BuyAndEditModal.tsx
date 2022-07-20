import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../state";
import { IIngredients } from "../../../constants/types";
import "./BuyAndEditModal.scss";
import { color } from "../../../constants/color";
import { calculateHowMuchToBuy } from "../../../constants/utilFunc";
interface IProps {
  ingredient: IIngredients;
  setIsOpen: (value: boolean) => void;
}
const BuyAndEditModal: React.FC<IProps> = (props) => {
  const [enableButtons, setEnableButtons] = useState(true);
  const [openEditIngredientModal, setOpenEditIngredientModal] = useState(false);
  const [modalState, setModalState] = useState(props.ingredient);
  const [purchaseAmount, setPurchaseAmount] = useState<number>(
    calculateHowMuchToBuy(
      props.ingredient.base_amount,
      props.ingredient.current_amount
    )
  );

  const dispatch = useDispatch();
  const { deleteIngredients, buyIngredients, editIngredients } =
    bindActionCreators(actionCreators, dispatch);

  const handleDeleteIngredient = () => {
    deleteIngredients(props.ingredient.id);
  };
  const handleBuy = () => {
    const purchaseItem = {
      id: props.ingredient.id,
      amount: purchaseAmount + props.ingredient.current_amount,
    };
    buyIngredients(purchaseItem);
    props.setIsOpen(false);
  };
  const handleSave = () => {
    editIngredients(modalState);
    setOpenEditIngredientModal(false);
  };

  return (
    <div className="buyModal">
      <div className="content">
        {!openEditIngredientModal && (
          <div className="inputBlock">
            <p className="inputLabel">How much did you both</p>
            <div className="inputEl">
              <input
                type="number"
                value={purchaseAmount}
                onChange={(e) => setPurchaseAmount(+e.target.value)}
              />
            </div>
          </div>
        )}

        {openEditIngredientModal && (
          <div className="editInputs">
            <div className="inputBlock">
              <p className="inputLabel">Name</p>
              <div className="inputEl">
                <input
                  type="text"
                  value={modalState.name}
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
                  value={modalState.price}
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
                  value={modalState.base_amount}
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
                  value={modalState.current_amount}
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
              <p className="inputLabel">Percentage amount</p>
              <div className="inputEl">
                <input
                  type="number"
                  value={modalState.percentage_amount}
                  onChange={(e) => {
                    setModalState({
                      ...modalState,
                      percentage_amount: +e.target.value,
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
                  value={modalState.calories}
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
                  value={modalState.carbs}
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
                  value={modalState.fat}
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
        <div className="buyAction">
          <button
            className="buy-BTN"
            disabled={openEditIngredientModal}
            style={{
              backgroundColor: !openEditIngredientModal
                ? color.mainBlue
                : color.buttonDisabled,
            }}
            onClick={() => handleBuy()}
          >
            BUY
          </button>
        </div>
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
            disabled={enableButtons}
            style={{
              backgroundColor: !enableButtons
                ? color.mainBlue
                : color.buttonDisabled,
            }}
            onClick={() => handleSave()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyAndEditModal;
