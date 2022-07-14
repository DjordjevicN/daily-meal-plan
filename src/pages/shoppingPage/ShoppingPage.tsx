import React, { useEffect, useState } from "react";
import TableRow from "../../components/tableRow/TableRow";
import "./ShoppingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import { bindActionCreators } from "redux";
import { RiAddCircleFill } from "react-icons/ri";

const ShoppingPage = () => {
  const [addIngModal, setAddIngModal] = useState<boolean>(false);
  const [modalState, setModalState] = useState({
    meal_id: 0,
    name: "",
    price: 0,
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
    img: "",
    base_amount: 0,
    current_amount: 0,
  });
  console.log(modalState);

  const dispatch = useDispatch();
  const { getAllIngredients } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    getAllIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allIngredients = useSelector((state: State) => {
    return state.ingredients;
  });

  const handleAddNew = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(modalState);
    setAddIngModal(false);
  };
  return (
    <>
      <div className="shopping">
        <div className="content">
          <div className="addNewIngredient">
            <RiAddCircleFill
              onClick={() => {
                setAddIngModal(true);
              }}
            />
          </div>
          <div className="table">
            {allIngredients.map((ingredient) => {
              return <TableRow key={ingredient.id} ingredient={ingredient} />;
            })}
          </div>
        </div>
      </div>
      {addIngModal && (
        <div className="addModal">
          <div className="content">
            <h2>Add new ingredient</h2>
            <div className="form">
              <form onSubmit={handleAddNew}>
                <div className="inputBlock">
                  <p className="inputLabel">Name</p>
                  <input
                    type="text"
                    value={modalState.name}
                    onChange={(e) => {
                      setModalState({ ...modalState, name: e.target.value });
                    }}
                  />
                </div>
                <div className="inputBlock">
                  <p className="inputLabel">Price</p>
                  <input
                    type="number"
                    value={modalState.price}
                    onChange={(e) => {
                      setModalState({ ...modalState, price: +e.target.value });
                    }}
                  />
                </div>
                <div className="inputBlock">
                  <p className="inputLabel">Base amount</p>
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
                <div className="inputBlock">
                  <p className="inputLabel">Current amount</p>
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
                <div className="inputBlock">
                  <p className="inputLabel">Calories</p>
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
                <div className="inputBlock">
                  <p className="inputLabel">Carbs</p>
                  <input
                    type="number"
                    value={modalState.carbs}
                    onChange={(e) => {
                      setModalState({ ...modalState, carbs: +e.target.value });
                    }}
                  />
                </div>
                <div className="inputBlock">
                  <p className="inputLabel">Fat</p>
                  <input
                    type="number"
                    value={modalState.fat}
                    onChange={(e) => {
                      setModalState({ ...modalState, fat: +e.target.value });
                    }}
                  />
                </div>

                <div className="inputBlock">
                  <p className="inputLabel">Current amount</p>
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
                <div className="inputBlock">
                  <input type="submit" value="Add" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingPage;
