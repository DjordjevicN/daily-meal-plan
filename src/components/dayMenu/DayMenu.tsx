import React, { useState } from "react";
import Meal from "../meal/Meal";
import "./DayMenu.scss";
import moment from "moment";
import { data } from "../../Data";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function DayMenu() {
  const [dayId, setDayId] = useState<number>(+moment().format("e"));

  const nextDay = () => {
    if (dayId === 6) {
      setDayId(0);
    } else {
      setDayId(dayId + 1);
    }
  };
  const prevDay = () => {
    if (dayId === 0) {
      setDayId(6);
    } else {
      setDayId(dayId - 1);
    }
  };
  console.log(dayId);

  const todaysMeal = data.filter((item) => item.day === dayId);

  return (
    <div className="dayMenu">
      <div className="content">
        <div className="title">
          <BsChevronCompactLeft className="icon" onClick={() => prevDay()} />

          <h1 className="theTitle">{`Today's Meal Plan  ${todaysMeal[0].dayName}`}</h1>

          <BsChevronCompactRight className="icon" onClick={() => nextDay()} />
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
