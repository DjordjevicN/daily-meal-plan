import { useId, useState } from "react";
import arrowRight from "../assets/icons/arrow-right.svg";
import { MealDisplayItem } from "./MealDisplayItem";
import { AddBox } from "./AddBox";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const mealsInit = [
  {
    id: "2",
    name: "Kokice",
    caloriesTotal: 200,
    whenToEat: "Lunch",
  },
  {
    id: "3",
    name: "Hleb",
    caloriesTotal: 200,
    whenToEat: "Breakfast",
  },
  {
    id: "4",
    name: "Jaja",
    caloriesTotal: 200,
    whenToEat: "Diner",
  },
];
const PlanForm = () => {
  const [day, setDay] = useState(0);
  const [meals, setMeals] = useState(mealsInit);
  const nextMealId = useId();
  const previousDay = () => {
    if (day === 0) {
      setDay(6);
      return;
    }
    setDay(day - 1);
  };
  const nextDay = () => {
    if (day === 6) {
      setDay(0);
      return;
    }
    setDay(day + 1);
  };
  const openMealSearch = () => {
    console.log("open meal search");
  };
  const breakfastMeals = meals.filter((item) => item.whenToEat === "Breakfast");
  const lunchMeals = meals.filter((item) => item.whenToEat === "Lunch");
  const dinerMeals = meals.filter((item) => item.whenToEat === "Diner");

  const addEmptyMeal = (type: string) => {
    const id = `${nextMealId}${meals.length}`;
    const newMeal = {
      id: id,
      name: "",
      caloriesTotal: 0,
      whenToEat: type,
    };
    setMeals([...meals, newMeal]);
  };

  const removeMeal = (id: string) => {
    setMeals(meals.filter((item) => item.id !== id));
  };
  return (
    <div className="mt-10">
      <div className="flex gap-3 justify-center">
        <div
          className="rotate-180 inline-block cursor-pointer"
          onClick={() => previousDay()}
        >
          <img src={arrowRight} alt="left" />
        </div>
        <div>
          <div className="min-w-36 flex justify-center">{days[day]}</div>
        </div>
        <div className="inline-block cursor-pointer" onClick={() => nextDay()}>
          <img src={arrowRight} alt="right" />
        </div>
      </div>
      <div className="">
        <div className="max-w-[500px] mx-auto">
          <p className="mb-10">Create your meal plan</p>
          <div className="text-textColor font-bold text-2xl mb-3">
            Breakfast
          </div>
          <div className="flex flex-col gap-2">
            {breakfastMeals.map((meal) => {
              return (
                <MealDisplayItem
                  key={meal.id}
                  meal={meal}
                  openMealSearch={openMealSearch}
                  removeMeal={() => removeMeal(meal.id)}
                />
              );
            })}
          </div>
          <AddBox type="Breakfast" addEmptyMeal={addEmptyMeal} />
          <div className="text-textColor font-bold text-2xl mb-3">Lunch</div>
          <div className="flex flex-col gap-2">
            {lunchMeals.map((meal) => {
              return (
                <MealDisplayItem
                  key={meal.id}
                  meal={meal}
                  openMealSearch={openMealSearch}
                  removeMeal={() => removeMeal(meal.id)}
                />
              );
            })}
          </div>

          <AddBox type="Lunch" addEmptyMeal={addEmptyMeal} />
          <div className="text-textColor font-bold text-2xl mb-3">Diner</div>
          <div className="flex flex-col gap-2">
            {dinerMeals.map((meal) => {
              return (
                <MealDisplayItem
                  key={meal.id}
                  meal={meal}
                  openMealSearch={openMealSearch}
                  removeMeal={() => removeMeal(meal.id)}
                />
              );
            })}
          </div>
          <AddBox type="Diner" addEmptyMeal={addEmptyMeal} />
        </div>
      </div>
    </div>
  );
};

export default PlanForm;
