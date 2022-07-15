import React, { useEffect, useState } from "react";
import TableRow from "../../components/tableRow/TableRow";
import "./ShoppingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import { bindActionCreators } from "redux";
import { RiAddCircleFill } from "react-icons/ri";

import AddIngredientModal from "../../components/modals/addIngredientModal/AddIngredientModal";

const ShoppingPage = () => {
  const [addIngModal, setAddIngModal] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { getAllIngredients } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    getAllIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allIngredients = useSelector((state: State) => {
    return state.ingredients;
  });

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
            <div className="filters">
              <div className="content">
                <button>urgent only</button>
              </div>
            </div>
            {allIngredients.map((ingredient) => {
              return <TableRow key={ingredient.id} ingredient={ingredient} />;
            })}
          </div>
        </div>
      </div>
      {addIngModal && <AddIngredientModal setAddIngModal={setAddIngModal} />}
    </>
  );
};

export default ShoppingPage;
