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
  const allIngredients = useSelector((state: State) => {
    return state.ingredients;
  });
  const [addIngModal, setAddIngModal] = useState<boolean>(false);
  const [additionalItems, setAdditionalItems] = useState<any[]>([]);
  const { getAllIngredients } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    getAllIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(additionalItems);

  const newShopItem = {
    id: 1,
    name: "test",
    price: 1,
    calories: 1,
    carbs: 1,
    protein: 1,
    fat: 1,
    img: "",
    unit: "",
  };
  return (
    <>
      <div className="shoppingPage">
        <div className="shoppingPage__content">
          <div className="table">
            {additionalItems.map((additionalIngredient) => {
              return <div>iiiiii</div>;
            })}
            {allIngredients.map((ingredient) => {
              return <TableRow key={ingredient.id} ingredient={ingredient} />;
            })}
          </div>
          {addIngModal && (
            <AddIngredientModal setAddIngModal={setAddIngModal} />
          )}
          <div className="addNewIngredient">
            <ButtonShell
              customStyle={{ backgroundColor: "#ecf0f3" }}
              icon={<GoPlusSmall />}
              onClick={() => {
                setAdditionalItems([...additionalItems, newShopItem]);
              }}
              type="mono"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingPage;
