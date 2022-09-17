import React from "react";
// import { IIngredients } from "../../constants/types";
import "./TableRow.scss";

import { baseUrl } from "../../constants/utilFunc";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import { bindActionCreators } from "redux";
import { RiShoppingCartLine } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { motion } from "framer-motion";

interface IProps {
  ingredient: any;
  userId: number;
}

const TableRow = ({ ingredient, userId }: IProps) => {
  const dispatch = useDispatch();
  const { switchHaveItem, deleteSingleShoppingItem } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleBuy = () => {
    const value = {
      item_id: +ingredient.id,
      have: !ingredient.have,
      users_id: userId,
    };

    switchHaveItem(value);
  };
  const handleDeleteShopItem = () => {
    deleteSingleShoppingItem({ itemId: +ingredient.id, userId });
  };

  return (
    <motion.div
      onClick={() => handleDeleteShopItem()}
      // drag="x"
      // dragConstraints={{ left: 0, right: 0 }}
      // onDragEnd={(event, info) => {
      //   if (info.offset.x < -150) {
      //     handleDeleteShopItem();
      //   } else if (info.offset.x > 150) {
      //     handleBuy();
      //   }
      // }}
    >
      <div className="tableRow">
        <div className="image">
          <img
            src={
              ingredient.img
                ? `${baseUrl()}/uploads/${ingredient.img}`
                : "images/noimage.png"
            }
            alt="meal"
          />
        </div>
        <div className="nameAndAmount">
          <div className="name">
            <p>{ingredient.name}</p>
          </div>
          <div className="purchaseAmount">
            <p>Buy</p>
            <p className="amount">{`${ingredient.amount} gr`}</p>
          </div>
        </div>

        <div className="buyButton">
          <ButtonShell
            onClick={() => handleBuy()}
            type="monoCube"
            customStyle={{
              width: "56px",
              height: "56px",
            }}
          >
            {ingredient.have ? <FcCheckmark /> : <RiShoppingCartLine />}
          </ButtonShell>
        </div>
      </div>
    </motion.div>
  );
};

export default TableRow;
