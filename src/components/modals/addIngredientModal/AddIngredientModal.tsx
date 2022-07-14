import React, { useState } from "react";
import { initAddIngredientModalState } from "../../../constants/initStates";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../state";
import { bindActionCreators } from "redux";
import { GrClose } from "react-icons/gr";
import "./AddIngredientModal.scss";

interface IProps {
  setAddIngModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddIngredientModal: React.FC<IProps> = ({ setAddIngModal }) => {
  const [modalState, setModalState] = useState(initAddIngredientModalState);
  const dispatch = useDispatch();

  const { addNewIngredients } = bindActionCreators(actionCreators, dispatch);

  const handleAddNew = (event: React.FormEvent) => {
    event.preventDefault();
    addNewIngredients(modalState);
    setAddIngModal(false);
    setModalState(initAddIngredientModalState);
  };
  return (
    <div className="addModal">
      <div className="content">
        <GrClose className="closeIcon" onClick={() => setAddIngModal(false)} />
        <h2>Add new ingredient</h2>
        <div className="form">
          <form onSubmit={handleAddNew}>
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
            <div className="inputBlock button">
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddIngredientModal;
