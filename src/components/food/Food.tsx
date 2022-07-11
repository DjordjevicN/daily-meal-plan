import React, { useState } from "react";
import { IFood } from "../../Types";
import "./food.scss";

type Props = {
  food: IFood;
};
const Food: React.FC<Props> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="food"
        key={props.food.id}
        onClick={() => setIsModalOpen(true)}
      >
        <img className="foodImage" src={props.food.img} alt="meal " />
        <h5 className="foodTitle">{props.food.name}</h5>
        <p className="foodWeight">{props.food.amount}</p>
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

export default Food;
