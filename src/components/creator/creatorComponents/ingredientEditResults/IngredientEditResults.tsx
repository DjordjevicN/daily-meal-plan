import React, { useState } from "react";
import { baseUrl } from "../../../../constants/utilFunc";
import { GrClose } from "react-icons/gr";
import "./ingredientEditResults.scss";

import { useDispatch } from "react-redux";
import { actionCreators } from "../../../../state";
import { bindActionCreators } from "redux";

interface IIngredient {
  calories: number | string;
  carbs: number | string;
  fat: number | string;
  id: number | string;
  img: any;
  name: string;
  price: number | string;
  protein: number | string;
  recipe_id?: number | null;
}
interface IProps {
  ingredient: IIngredient;
}

const IngredientEditResults: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const { upgradeIngredient, deleteIngredients } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [openEditModal, setOpenEditModal] = useState(false);
  const [modalState, setModalState] = useState(props.ingredient);

  const handleUpdate = () => {
    upgradeIngredient(modalState);
    setOpenEditModal(false);
  };

  return (
    <>
      <div className="ingredientEditResults">
        <div className="ingredientEditResults__content">
          <div className="imageAndName">
            <img
              src={
                props.ingredient.img
                  ? `${baseUrl()}/uploads/${props.ingredient.img}`
                  : "images/noimage.png"
              }
              alt="meal"
            />
            <p className="name">{props.ingredient.name}</p>
            <div className="nutrition">
              <div className="nutrition-section">
                <p className="carbs">
                  <span>Carbs: </span>
                  {props.ingredient.carbs}
                </p>
                <p className="protein">
                  <span>Protein: </span>
                  {props.ingredient.protein}
                </p>
              </div>
              <div className="nutrition-section">
                <p className="fat">
                  <span>Fat: </span>
                  {props.ingredient.fat}
                </p>
                <p className="price">
                  <span>Price: </span>
                  {props.ingredient.price}
                </p>
              </div>
            </div>
          </div>

          <button
            className="editBtn"
            onClick={() => setOpenEditModal(!openEditModal)}
          >
            Edit
          </button>
          <button
            className="editBtn"
            onClick={() => deleteIngredients(modalState.id)}
          >
            Delete
          </button>
        </div>
      </div>
      {openEditModal && (
        <div className="updateIngredient">
          <div className="updateIngredient__content">
            <div className="exitBtn" onClick={() => setOpenEditModal(false)}>
              <GrClose />
            </div>
            <div className="modalTitle">
              <p>Update Ingredient</p>
            </div>
            <div className="formBox">
              <form onSubmit={handleUpdate}>
                <div className="inputBlock">
                  <p className="inputLabel">Name</p>
                  <div className="inputEl">
                    <input
                      type="text"
                      value={modalState.name}
                      onChange={(e) => {
                        setModalState({
                          ...modalState,
                          name: e.target.value,
                        });
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
                        setModalState({
                          ...modalState,
                          fat: +e.target.value,
                        });
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
                        setModalState({
                          ...modalState,
                          protein: +e.target.value,
                        });
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
                <div className="inputBlock ">
                  <input
                    className="submitButton"
                    type="submit"
                    value="Update"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IngredientEditResults;
