import React, { useEffect, useState } from "react";

import "./day.scss";
import MealOrganizer from "../mealOrganizer/MealOrganizer";
import { IDay } from "../../../../../constants/types";
import { baseUrl } from "../../../../../constants/utilFunc";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../../../../../state";
import axios from "axios";

interface IProps {
  dayInfo: IDay;
}
const Day: React.FC<IProps> = ({ dayInfo }) => {
  const [dailyMeals, setDailyMeals] = useState([]);
  // const dispatch = useDispatch();
  // const user = useSelector((state: State) => state.user);
  // const planDays = useSelector((state: State) => state.usersPlanDays);

  // const { getAllMealsInDays } = bindActionCreators(actionCreators, dispatch);
  const mealsNo = [0, 1, 2, 3, 4];
  const getMeals = async () => {
    let value = {
      day_id: dayInfo.id,
      plan_id: dayInfo.plan_id,
    };
    // getAllMealsInDays(data);
    const response = await axios.post(`${baseUrl()}/get_all_meals_in_days`, {
      value,
    });
    setDailyMeals(response.data);
  };
  useEffect(() => {
    getMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="day">
      <div className="day__content">
        <p className="dayName">{dayInfo.name}</p>
        <div className="meals">
          {mealsNo.map((item: any) => {
            return (
              <>
                <MealOrganizer
                  meal={dailyMeals[item] ? dailyMeals[item] : dayInfo}
                  mealNum={item + 1}
                  empty={dailyMeals[item] ? false : true}
                />
                <div className="line"></div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Day;
