import React, { useState } from "react";
import Meal from "../meal/Meal";
import "./DayMenu.scss";
import moment from "moment";
import { data } from "../../Data";

function DayMenu() {
  const [dayId, setDayId] = useState<number>(+moment().format("e"));

  const nextDay = () => {
    if (dayId === 7) {
      setDayId(1);
    } else {
      setDayId(dayId + 1);
    }
  };
  const prevDay = () => {
    if (dayId === 1) {
      setDayId(7);
    } else {
      setDayId(dayId - 1);
    }
  };
  const todaysMeal = data.filter((item) => item.day === dayId);

  return (
    <div className="dayMenu">
      <div className="content">
        <div className="title">
          <button onClick={() => prevDay()}>Previous</button>
          <h1>{`Today's Meal Plan  ${todaysMeal[0].dayName}`}</h1>
          <button onClick={() => nextDay()}>Next</button>
        </div>
        <div className="menu">
          <div className="menu_content">
            <div className="meal">
              {todaysMeal[0].food ? (
                todaysMeal[0].food?.map((meal) => (
                  <Meal meal={meal} key={meal.meal_no} />
                ))
              ) : (
                <div>I WAS LAZY TO MAKE THIS PART ¯\_(ツ)_/¯</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayMenu;
