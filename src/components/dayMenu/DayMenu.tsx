import React, { useState, useEffect } from "react";
import Meal from "../meal/Meal";
import "./DayMenu.scss";
import moment from "moment";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import { bindActionCreators } from "redux";
import { dayConst } from "../../constants/dayConst";

const DayMenu = () => {
  const dispatch = useDispatch();
  const [dayId, setDayId] = useState<number>(+moment().format("e"));
  const { getTodaysMeals } = bindActionCreators(actionCreators, dispatch);
  const user = useSelector((state: State) => state.user);

  useEffect(() => {
    let plan_id = user?.plan_id ?? 0;
    if (plan_id > 0) {
      const data = {
        plan_id: user.plan_id,
        weekDay_id: dayId,
      };

      getTodaysMeals(data);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.plan_id, dayId]);

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

  // const getNutritionStats = () => {
  //   const food = user.todaysMeals;
  //   let stats = {
  //     calories: 0,
  //     carbs: 0,
  //     fat: 0,
  //     protein: 0,
  //     price: 0,
  //   };

  //   food.forEach((i: any) => {
  //     i.contents.forEach((j: any) => {
  //       if (j.calories) {
  //         stats.calories = stats.calories += j.calories;
  //       }
  //       if (j.carbs) {
  //         stats.carbs = stats.carbs += j.carbs;
  //       }
  //       if (j.fat) {
  //         stats.fat = stats.fat += j.fat;
  //       }
  //       if (j.protein) {
  //         stats.protein = stats.protein += j.protein;
  //       }
  //       if (j.price) {
  //         stats.price = stats.price += j.price;
  //       }
  //     });
  //   });
  //   return stats;
  // };

  return (
    <div className="dayMenu">
      <div className="content">
        <div className="screenNavigation">
          <div className="navContent">
            <div className="nav-item">
              <BsChevronCompactLeft
                className="icon"
                onClick={() => prevDay()}
              />
              <div className="titleBox">
                <p className="day">{`${dayConst[dayId]}`}</p>
                <p className="calorieGoal">2600 - 3100</p>
              </div>

              <BsChevronCompactRight
                className="icon"
                onClick={() => nextDay()}
              />
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="menu_content">
            <div className="meal">
              {user?.todaysMeals ? (
                user.todaysMeals.map((meal: any) => (
                  <Meal meal={meal} key={meal.id} />
                ))
              ) : (
                <div>
                  <p> ¯\_(ツ)_/¯</p>
                  <p>THERE IS NO MEALS FOR TODAY.</p>
                  <p> GO TO CREATOR TAB AND CREATE YOUR MEAL PLAN.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayMenu;
