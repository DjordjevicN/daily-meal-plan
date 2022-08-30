import React, { useState } from "react";
import "./createIngredient.scss";
import { initAddIngredientModalState } from "../../../../constants/initStates";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../../state";
import { bindActionCreators } from "redux";
import InputField from "../../../../UiComponents/atom/input/InputField";
import InputButton from "../../../../UiComponents/atom/InputButton/InputButton";
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
        <div className="modalTitle">
          <p>Create Ingredient</p>
        </div>
        <div className="formBox">
          <form onSubmit={handleAddNew}>
            <div className="inputBlock">
              <InputField
                placeholder="Name"
                change={(inputValue: string) => {
                  setModalState({ ...modalState, name: inputValue });
                }}
              />
            </div>

            <div className="inputBlock">
              <InputField
                type="number"
                placeholder="Price"
                change={(inputValue: number) => {
                  setModalState({
                    ...modalState,
                    price: +inputValue,
                  });
                }}
              />
            </div>

            <div className="inputBlock">
              <InputField
                type="number"
                placeholder="Calories"
                change={(inputValue: number) => {
                  setModalState({
                    ...modalState,
                    calories: +inputValue,
                  });
                }}
              />
            </div>
            <div className="inputBlock">
              <InputField
                placeholder="Carbs"
                type="number"
                change={(inputValue: number) => {
                  setModalState({
                    ...modalState,
                    carbs: +inputValue,
                  });
                }}
              />
            </div>
            <div className="inputBlock">
              <InputField
                placeholder="Fat"
                type="number"
                change={(inputValue: number) => {
                  setModalState({ ...modalState, fat: +inputValue });
                }}
              />
            </div>
            <div className="inputBlock">
              <InputField
                placeholder="Protein"
                type="number"
                change={(inputValue: number) => {
                  setModalState({ ...modalState, protein: +inputValue });
                }}
              />
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
            <InputButton>
              <input type="submit" value="Add" />
            </InputButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateIngredient;
