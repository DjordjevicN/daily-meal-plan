import React, { useEffect, useState } from "react";
import TableRow from "../../components/tableRow/TableRow";
import "./ShoppingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import { bindActionCreators } from "redux";

import AddIngredientModal from "../../components/modals/addIngredientModal/AddIngredientModal";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";
import { GoPlusSmall } from "react-icons/go";

const ShoppingPage = () => {
  const dispatch = useDispatch();
  const [addIngModal, setAddIngModal] = useState<boolean>(false);
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
      <div className="shoppingPage">
        <div className="shoppingPage__content">
          <div className="table">
            {allIngredients.map((ingredient) => {
              return <TableRow key={ingredient.id} ingredient={ingredient} />;
            })}
          </div>
          {addIngModal && (
            <AddIngredientModal setAddIngModal={setAddIngModal} />
          )}
          <div className="addNewIngredient">
            <ButtonShell
              onClick={() => {
                setAddIngModal(true);
              }}
              type="mono"
            >
              <GoPlusSmall />
            </ButtonShell>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingPage;
