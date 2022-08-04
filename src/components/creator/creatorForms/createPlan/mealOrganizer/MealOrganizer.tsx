import React, { useState, useEffect } from "react";
import "./mealOrganizer.scss";
import axios from "axios";
import { baseUrl } from "../../../../../constants/utilFunc";
import { IMealInformation } from "../../../../../constants/types";
import { mealConst } from "../../../../../constants/mealConst";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../../../../../state";
import { bindActionCreators } from "redux";

interface IProps {
  meal: any;
  empty: boolean;
  mealNum: number;
}

const MealOrganizer: React.FC<IProps> = ({ meal, empty, mealNum }) => {
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mealAmount, setMealAmount] = useState(0);
  const [mealUnit, setMealUnit] = useState("");
  const [searchResults, setSearchResults] = useState<IMealInformation[]>([]);
  const { addMealToDay, updateAmountAndUnitOfMeal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    if (searchValue.length > 2) {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const handleSearch = async () => {
    const value = {
      searchValue: searchValue,
    };

    const response = await axios.post(`${baseUrl()}/get_meal_by_name_type`, {
      value,
    });
    if (response.statusText === "OK") {
      setSearchResults(response.data);
    }
  };

  const handleAddToMealInDay = (mealId: number) => {
    const data = {
      meal_id: mealId,
      day_id: meal.id,
      // meal_type: empty ? mealNum : meal.meal_type,
    };
    console.log(data);

    addMealToDay(data);
    setOpenEdit(false);
  };

  // const handleUpdateAmounts = () => {
  //   const data = {
  //     id: meal.id,
  //     amount: amount,
  //     unit: unit,
  //   };

  //   updateAmountAndUnitOfMeal(data);
  // };

  return (
    <div className="mealOrganizer">
      <div className="mealOrganizer__content">
        <div className="topBar">
          <div className="mealName">
            <p className="name">
              {empty ? mealConst[mealNum] : mealConst[meal.meal_type]}
            </p>
            <div>
              <button onClick={() => setOpenEdit(!openEdit)}>Search</button>
              <button>Delete</button>
            </div>
          </div>

          {openEdit && (
            <div className="actions">
              <div className="search">
                <input
                  type="text"
                  placeholder="Find a meal"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>

              {searchResults.length > 0 && (
                <div className="searchResults">
                  {searchResults.map((item) => {
                    return (
                      <div
                        className="searchResults__content"
                        key={item.id}
                        onClick={() => handleAddToMealInDay(+item.id)}
                      >
                        <img
                          src={
                            item.img
                              ? `${baseUrl()}/uploads/${item.img}`
                              : "images/noimage.png"
                          }
                          alt="meal"
                        />

                        <p className="name">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="displayMeals">
          <div className="displayMeals__content">
            <div className="image">
              <img
                src={
                  meal.img
                    ? `${baseUrl()}/uploads/${meal.img}`
                    : "images/noimage.png"
                }
                alt="meal"
              />
            </div>
            <p className="title">{empty ? "No meal" : meal.name}</p>
            <div className="amount">
              <input
                type="text"
                className="weight"
                onChange={(e) => {
                  setMealAmount(+e.target.value);
                }}
              ></input>
              <select
                onChange={(e) => {
                  setMealUnit(e.target.value);
                }}
              >
                <option value="gr">gr</option>
                <option value="Kg">Kg</option>
                <option value="piece">piece</option>
                <option value="cup">cup</option>
                <option value="ml">ml</option>
                <option value="dl">dl</option>
                <option value="L">L</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value={meal.unit}>{`>${meal.unit}<`}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealOrganizer;
