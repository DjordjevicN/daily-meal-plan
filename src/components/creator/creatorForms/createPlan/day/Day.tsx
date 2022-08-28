import React, { useEffect, useState } from "react";

import "./day.scss";
import MealOrganizer from "../mealOrganizer/MealOrganizer";
import { IDay } from "../../../../../constants/types";
import { baseUrl } from "../../../../../constants/utilFunc";
import { dayConst } from "../../../../../constants/dayConst";
import axios from "axios";

interface IProps {
  dayInfo: IDay;
}
const Day: React.FC<IProps> = ({ dayInfo }) => {
  const [openDay, setOpenDay] = useState(true);
  const [mealsInDay, setMealsInDay] = useState([]);

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
        <div className="dayTitle" onClick={() => setOpenDay(!openDay)}>
          <p className="dayName">{dayConst[dayInfo.weekDay_id]}</p>
        </div>
        {openDay && (
          <div className="meals">
            {mealsInDay.map((item: any) => {
              return (
                <div key={item.id}>
                  <MealOrganizer mealData={item} />
                  <div className="line"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Day;
