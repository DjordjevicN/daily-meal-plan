import React, { useState } from "react";
import { baseUrl } from "../../constants/utilFunc";
import "./FoodItems.scss";

type Props = {
  food: any;
  meal: any;
};
const FoodItems: React.FC<Props> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="foodItems"
        key={props.food.id}
        // onClick={() => setIsModalOpen(true)}
      >
        <img
          src={
            props.food.img
              ? `${baseUrl()}/uploads/${props.food.img}`
              : props.food.imageCall
              ? `${props.food.imageCall}`
              : "images/noimage.png"
          }
          alt="meal"
        />
        <div className="foodInfo">
          <h5 className="foodTitle">{props.food.name}</h5>
          <p className="foodWeight">{`${props.meal.amount} ${props.meal.unit}`}</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="mealModal">
          <div className="content">
            <button onClick={() => setIsModalOpen(false)}>CLOSE</button>
            <h3>title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              maxime corporis, quo amet similique enim, sequi ullam libero
              commodi, repudiandae assumenda? Praesentium porro recusandae,
              ipsam quae quam dicta a maxime!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItems;
