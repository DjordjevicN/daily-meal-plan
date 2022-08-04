import React, { useEffect, useState } from "react";

import "./day.scss";
import MealOrganizer from "../mealOrganizer/MealOrganizer";
import { IDay } from "../../../../../constants/types";
import { baseUrl } from "../../../../../constants/utilFunc";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../../../../../state";
import { dayConst } from "../../../../../constants/dayConst";
import axios from "axios";

interface IProps {
  dayInfo: IDay;
}
const Day: React.FC<IProps> = ({ dayInfo }) => {
  const [mealsInDay, setMealsInDay] = useState([]);
  const dispatch = useDispatch();
  const usersPlan = useSelector((state: State) => state.usersPlan);
  const { getMealsInDay } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getMealInDay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getMealInDay = async () => {
    const value = dayInfo.id;
    const response = await axios.post(`${baseUrl()}/get_meals_in_day`, {
      value,
    });
    setMealsInDay(response.data);
  };
  return (
    <div className="day">
      <div className="day__content">
        <p className="dayName">{dayConst[dayInfo.weekDay_id]}</p>
        <div className="meals">
          {mealsInDay.map((item: any) => {
            console.log(item);
            return (
              <>
                <MealOrganizer key={item.id} mealData={item} />
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
