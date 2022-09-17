import React, { useState, useEffect } from "react";
import InputField from "../../UiComponents/atom/input/InputField";
import "./FoodTransfer.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import { bindActionCreators } from "redux";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";

const FoodTransfer = () => {
  const dispatch = useDispatch();
  const { getFoodForTransfer, transferIngredient } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const basicFoodTransfer = useSelector(
    (state: State) => state.basicFoodTransfer
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 2) {
      getFoodForTransfer(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleTransfer = (item: any) => {
    transferIngredient(item);
  };

  return (
    <div className="foodTransfer">
      <div className="foodTransfer__content">
        <div className="searchBox">
          <InputField
            change={(inputValue: string) => {
              setSearch(inputValue);
            }}
          />
        </div>
        <div className="results">
          <div className="results__content">
            {basicFoodTransfer.map((item: any) => {
              return (
                <div className="responseItem" key={item.id}>
                  <div className="responseItem__content">
                    <div className="mainInfo">
                      {item.imageCall && <img src={item.imageCall} alt="" />}
                      <p>{`ID: ${item.id} `}</p>
                      <p>{`Name: ${item.food_name}`}</p>
                    </div>

                    <div className="restInfo">
                      <div className="restInfo__content">
                        <p>{`Calories: ${item.calories} `}</p>
                        <p>{`Carbs: ${item.carbs}`}</p>
                        <p>{`Cholesterol: ${item.cholesterol}`}</p>
                        <p>{`zinc= "${item.zinc}"`}</p>
                      </div>
                    </div>
                    <div className="action">
                      <ButtonShell
                        onClick={() => handleTransfer(item)}
                        customStyle={{ marginTop: "30px" }}
                        type="mono"
                      >
                        Transfer
                      </ButtonShell>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodTransfer;
