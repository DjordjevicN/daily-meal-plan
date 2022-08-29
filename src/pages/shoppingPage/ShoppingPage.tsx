import React, { useEffect, useState } from "react";
import TableRow from "../../components/tableRow/TableRow";
import "./ShoppingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import { bindActionCreators } from "redux";

import AddIngredientModal from "../../components/modals/addIngredientModal/AddIngredientModal";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";
import { GoPlusSmall } from "react-icons/go";
import InputField from "../../UiComponents/atom/input/InputField";
import SelectInput from "../../UiComponents/atom/SelectInput/SelectInput";

const ShoppingPage = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state: State) => {
    return state.shoppingList;
  });
  const user = useSelector((state: State) => {
    return state.user;
  });

  const [addIngModal, setAddIngModal] = useState<boolean>(false);
  const [newShopItem, setNewShopItem] = useState({
    name: "",
    amount: 0,
    unit: "",
    img: "",
    users_id: user.id,
    have: 0,
  });
  const [openAddModal, setOpenAddModal] = useState(false);

  const {
    createShoppingListItem,
    getPlansIngredients,
    getShoppingItemsByUserId,
  } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    getShoppingItemsByUserId(user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // GET ALL INGREDIENTS FROM MEAL PLAN
  // GET SHOPPING ITEMS WHERE USER_IS THIS USER
  // ADD NEW ITEM TO THE SHOP

  const handleAddItemToShoppingList = () => {
    createShoppingListItem(newShopItem);
    setOpenAddModal(false);
  };

  return (
    <div className="shoppingPage">
      {openAddModal && (
        <div className="newShoppingItem">
          <div className="newShoppingItem__content">
            <p className="inputTitle">Add new item into your shopping list</p>
            <div className="form">
              <InputField
                placeholder="Name"
                change={(inputValue: string) =>
                  setNewShopItem({ ...newShopItem, name: inputValue })
                }
              />
              <InputField
                placeholder="Amount"
                change={(inputValue: number) =>
                  setNewShopItem({ ...newShopItem, amount: +inputValue })
                }
              />
              <SelectInput
                placeholder="Unit"
                change={(inputValue: string) =>
                  setNewShopItem({ ...newShopItem, unit: inputValue })
                }
                options={[
                  { id: 1, value: "gr", option: "gr" },
                  { id: 2, value: "Kg", option: "Kg" },
                  { id: 3, value: "piece", option: "piece" },
                  { id: 4, value: "cup", option: "cup" },
                  { id: 5, value: "ml", option: "ml" },
                  { id: 6, value: "dl", option: "dl" },
                  { id: 7, value: "L", option: "L" },
                  { id: 8, value: "cm", option: "cm" },
                  { id: 9, value: "m", option: "m" },
                ]}
              />
              <ButtonShell onClick={handleAddItemToShoppingList} type="mono">
                Add item
              </ButtonShell>
            </div>
          </div>
        </div>
      )}

      <div className="shoppingPage__content">
        <div className="table">
          {shoppingList.length > 0 ? (
            shoppingList.map((ingredient: any) => {
              return (
                <TableRow
                  key={ingredient.id}
                  ingredient={ingredient}
                  userId={+user.id}
                />
              );
            })
          ) : (
            <div>
              <p className="noShoppingList-generate">
                Click on "Start shopping" to generate shopping list based on
                your meal plan
              </p>
              <p className="noShoppingList-additional">
                Click on "+" to add additional items
              </p>
            </div>
          )}
        </div>
        {addIngModal && <AddIngredientModal setAddIngModal={setAddIngModal} />}
        <div className="addNewIngredient">
          <ButtonShell
            customStyle={{ backgroundColor: "#ecf0f3" }}
            icon={<GoPlusSmall />}
            onClick={() => {
              setOpenAddModal(!openAddModal);
            }}
            type="mono"
          />
          <ButtonShell
            customStyle={{ backgroundColor: "#ecf0f3", marginTop: "30px" }}
            onClick={() => {
              shoppingList.length === 0 &&
                getPlansIngredients(user.plan_id, +user.id);
            }}
            type="mono"
          >
            Start shopping
          </ButtonShell>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
