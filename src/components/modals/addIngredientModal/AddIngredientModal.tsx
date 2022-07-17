import React, { useState } from "react";
import { initAddIngredientModalState } from "../../../constants/initStates";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../state";
import { bindActionCreators } from "redux";
import { GrClose } from "react-icons/gr";
import "./AddIngredientModal.scss";
// import axios from "axios";

interface IProps {
  setAddIngModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IIngState {
  meal_id?: number;
  name?: string;
  price?: number;
  calories?: number;
  carbs?: number;
  protein?: number;
  fat?: number;
  img?: any;
  base_amount?: number;
  current_amount?: number;
  percentage_amount?: number;
}

const AddIngredientModal: React.FC<IProps> = ({ setAddIngModal }) => {
  const [modalState, setModalState] = useState<IIngState>(
    initAddIngredientModalState
  );
  const dispatch = useDispatch();

  const { addNewIngredients } = bindActionCreators(actionCreators, dispatch);

  // const handleFile = async () => {
  //   const formData = new FormData();
  //   formData.append("picture", modalState.img);
  //   formData.append("newIng", "44");
  //   await fetch("http://localhost:3001/picture", {
  //     method: "POST",
  //     body: formData,
  //   }).then((res) => res.json());
  // };
  const handleAddNew = (event: React.FormEvent) => {
    event.preventDefault();
    // handleFile();
    addNewIngredients(modalState);
    setAddIngModal(false);
    setModalState(initAddIngredientModalState);
  };
  return (
    <div className="addModal">
      {/* <img src={`http://localhost:3001/uploads/2eggs.jpg`} alt="tablica" /> */}
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
              <p className="inputLabel">percentage amount</p>
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
                      img: e.target.files ? e.target.files[0] : null,
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
