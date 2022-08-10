import React, { useState, useEffect } from "react";
import "./mealOrganizer.scss";
import axios from "axios";
import { baseUrl } from "../../../../../constants/utilFunc";
import { IMealInformation } from "../../../../../constants/types";
import { mealConst } from "../../../../../constants/mealConst";

import { useDispatch } from "react-redux";
import { actionCreators } from "../../../../../state";
import { bindActionCreators } from "redux";

interface MealData {
  amount: number;
  day_id: number;
  id: number;
  meal_id: number;
  meal_type: number;
  unit: string;
}

interface IProps {
  mealData: MealData;
}
const initState = {
  img: "",
  name: "",
};

const MealOrganizer: React.FC<IProps> = ({ mealData }) => {
  const dispatch = useDispatch();
  const [preventAction, setPreventAction] = useState(true);
  const [openEdit, setOpenEdit] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mealAmount, setMealAmount] = useState(mealData.amount);
  const [mealUnit, setMealUnit] = useState(mealData.unit);
  const [singleMeal, setSingleMeal] = useState(initState);
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
  useEffect(() => {
    getMeal(mealData.meal_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mealData.meal_id]);

  useEffect(() => {
    if (!preventAction) {
      console.log("ite");
      handleUpdateAmounts();
    }
    setPreventAction(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mealAmount, mealUnit]);

  const handleSearch = async () => {
    const value = {
      searchValue: searchValue,
    };
    const response = await axios.post(`${baseUrl()}/get_meal_by_name`, {
      value,
    });
    if (response.status === 200) {
      setSearchResults(response.data);
    }
  };

  const getMeal = async (value: number) => {
    if (value) {
      const response = await axios.post(`${baseUrl()}/get_meal_by_id`, {
        value,
      });
      setSingleMeal(response.data[0]);
      setOpenEdit(false);
    }
  };
  const getSingleMeal = async (id: number) => {
    const value = {
      id,
    };
    if (value) {
      const response = await axios.post(`${baseUrl()}/update_meal_in_day`, {
        value,
      });
      if (response.data.length > 0) {
      }
      console.log("single meal id", id, response.data[0].meal_id);

      getMeal(response.data[0].meal_id);
    }
  };

  const handleAddToMealInDay = async (mealId: number) => {
    const data = {
      meal_id: mealId,
      day_id: mealData.id,
    };

    setOpenEdit(false);
    await addMealToDay(data);
    await getSingleMeal(mealData.id);
  };

  const handleUpdateAmounts = () => {
    const data = {
      id: mealData.id,
      amount: mealAmount,
      unit: mealUnit,
    };
    console.log(data);

    updateAmountAndUnitOfMeal(data);
  };

  return (
    <div className="mealOrganizer">
      <div className="mealOrganizer__content">
        <div className="topBar">
          <div className="mealName">
            <p className="name">{mealConst[mealData.meal_type]}</p>
            <div>
              <button onClick={() => setOpenEdit(!openEdit)}>Search</button>
              {/* <button>Delete</button> */}
            </div>
          </div>

          {openEdit && (
            <div className="actions">
              <div className="search">
                <input
                  autoFocus
                  type="text"
                  placeholder="Find a meal"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>

              {searchResults.length > 0 && searchValue.length > 0 && (
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
            <div className="image" onClick={() => setOpenEdit(!openEdit)}>
              <img
                src={
                  singleMeal.img.length > 0
                    ? `${baseUrl()}/uploads/${singleMeal.img}`
                    : "images/noimage.png"
                }
                alt="meal"
              />
            </div>

            <p className="title">
              {singleMeal.name.length > 1 ? singleMeal.name : "No meal"}
            </p>
            <div className="amount">
              <input
                type="text"
                className="weight"
                value={mealAmount}
                onChange={(e) => {
                  setPreventAction(false);
                  setMealAmount(+e.target.value);
                }}
              ></input>
              <select
                onChange={(e) => {
                  setPreventAction(false);
                  setMealUnit(e.target.value);
                }}
              >
                <option value={mealUnit}>{mealUnit}</option>
                <option value="gr">gr</option>
                <option value="Kg">Kg</option>
                <option value="piece">piece</option>
                <option value="cup">cup</option>
                <option value="ml">ml</option>
                <option value="dl">dl</option>
                <option value="L">L</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealOrganizer;
