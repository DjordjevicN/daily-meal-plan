import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import "./createIngredient.scss";
import { initAddIngredientModalState } from "../../../../constants/initStates";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../../state";
import { bindActionCreators } from "redux";
interface IProps {
  setIsCreateIngredient: React.Dispatch<React.SetStateAction<boolean>>;
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
}

const CreateIngredient: React.FC<IProps> = (props) => {
  const [modalState, setModalState] = useState<IIngState>(
    initAddIngredientModalState
  );
  const dispatch = useDispatch();
  const { addNewIngredients } = bindActionCreators(actionCreators, dispatch);

  const handleAddNew = (event: React.FormEvent) => {
    event.preventDefault();

    addNewIngredients(modalState);
    props.setIsCreateIngredient(false);
    setModalState(initAddIngredientModalState);
  };

  return (
    <div className="createIngredient">
      <div className="createIngredient__content">
        <div
          className="exitBtn"
          onClick={() => props.setIsCreateIngredient(false)}
        >
          <GrClose />
        </div>
        <div className="modalTitle">
          <p>Create Ingredient</p>
        </div>
        <div className="formBox">
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
              <p className="inputLabel">Protein</p>
              <div className="inputEl">
                <input
                  type="number"
                  value={modalState.protein}
                  onChange={(e) => {
                    setModalState({ ...modalState, protein: +e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="fileInputBlock">
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

export default CreateIngredient;
