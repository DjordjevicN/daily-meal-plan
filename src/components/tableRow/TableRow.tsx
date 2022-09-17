import React, { useState } from "react";
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
import Modal from "../../UiComponents/template/Modal/Modal";

interface IProps {
  ingredient: any;
  userId: number;
}

const TableRow = ({ ingredient, userId }: IProps) => {
  const [openModal, setOpenModal] = useState(false);
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
    <motion.div>
      <div className="tableRow">
        {openModal && (
          <Modal
            close={() => setOpenModal(false)}
            proceed={() => handleDeleteShopItem()}
          >
            <p>Delete Shopping Item ?</p>
          </Modal>
        )}

        <div className="image">
          <img
            src={
              ingredient.img !== "null"
                ? `${baseUrl()}/uploads/${ingredient.img}`
                : "https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/noimage.png"
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
          <button className="deleteBtn" onClick={() => setOpenModal(true)}>
            Delete
          </button>
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
