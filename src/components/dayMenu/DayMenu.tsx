import React, { useState } from "react";
import Meal from "../meal/Meal";
import "./DayMenu.scss";
import moment from "moment";
import { data } from "../../Data";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GraphStats from "../graphStats/GraphStats";

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

  const todaysMeal = data.filter((item) => item.day === dayId);
  const getNutritionStats = () => {
    const food = todaysMeal[0].food;
    let stats = {
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      price: 0,
    };

    food.forEach((i) => {
      i.contents.forEach((j) => {
        if (j.calories) {
          stats.calories = stats.calories += j.calories;
        }
        if (j.carbs) {
          stats.carbs = stats.carbs += j.carbs;
        }
        if (j.fat) {
          stats.fat = stats.fat += j.fat;
        }
        if (j.protein) {
          stats.protein = stats.protein += j.protein;
        }
        if (j.price) {
          stats.price = stats.price += j.price;
        }
      });
    });
    return stats;
  };

  return (
    <div className="dayMenu">
      <div className="content">
        <div className="screenNavigation">
          <div className="navContent">
            <p className="screenTitle">Meal Plan</p>
            <div className="nav-item">
              <BsChevronCompactLeft
                className="icon"
                onClick={() => prevDay()}
              />
              <div className="box">
                <p className="day">{`${todaysMeal[0].dayName} Plan`}</p>
              </div>
              <BsChevronCompactRight
                className="icon"
                onClick={() => nextDay()}
              />
            </div>
          </div>
        </div>

        <div className="line" />
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
            <div className="stats">
              <GraphStats nutritionStats={getNutritionStats()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayMenu;
