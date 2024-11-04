import { useState } from "react";
import arrowRight from "../assets/icons/arrow-right.svg";
import { MealDisplayItem } from "./MealDisplayItem";
import { AddBox } from "./AddBox";
import { useSelector } from "react-redux";
import { days } from "../utils/constants";
import { useMealPlanById } from "../queryHooks/useMealPlanData";

const PlanForm = () => {
  const { user } = useSelector((state: any) => state.user);
  const { data: planData } = useMealPlanById(user?.activeMealPlanId);
  const [day, setDay] = useState(0);
  const mealsPerDays = planData?.data.days;
  const todaysMeals = mealsPerDays?.find((item: any) => item.day === days[day]);
  const breakfast = todaysMeals?.recipesSettings.filter(
    (item: any) => item.whenToEat === "breakfast"
  );
  const lunch = todaysMeals?.recipesSettings.filter(
    (item: any) => item.whenToEat === "lunch"
  );
  const dinner = todaysMeals?.recipesSettings.filter(
    (item: any) => item.whenToEat === "dinner"
  );

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

  const addRecipeMeal = (type: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newRecipe = {
      id: id,
      name: "",
      image: "",
      caloriesTotal: null,
      whenToEat: type,
      description: "",
      worksWellFor: [],
      recipes: [],
      day: days[day],
    };
    // setRecipes([...recipes, newRecipe]);
  };

  const removeRecipe = (id: string) => {
    // setRecipes(recipes.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="mt-10">
        <div className="flex gap-3 justify-center">
          <div
            className="rotate-180 inline-block cursor-pointer"
            onClick={() => previousDay()}
          >
            <img src={arrowRight} alt="left" />
          </div>
          <div>
            <div className="min-w-36 flex justify-center font-bold">
              {days[day]}
            </div>
          </div>
          <div
            className="inline-block cursor-pointer"
            onClick={() => nextDay()}
          >
            <img src={arrowRight} alt="right" />
          </div>
        </div>
        <div className="">
          <div className="max-w-[500px] mx-auto">
            <div className="text-textColor font-bold text-2xl mb-3">
              Breakfast
            </div>
            <div className="flex flex-col gap-2">
              {breakfast?.map((meal: any) => {
                return (
                  <MealDisplayItem
                    key={meal.id}
                    meal={meal}
                    removeRecipe={() => removeRecipe(meal.id)}
                  />
                );
              })}
            </div>
            <AddBox type="Breakfast" addRecipeMeal={addRecipeMeal} />
            <div className="text-textColor font-bold text-2xl mb-3">Lunch</div>
            <div className="flex flex-col gap-2">
              {lunch?.map((meal: any) => {
                return (
                  <MealDisplayItem
                    key={meal.id}
                    meal={meal}
                    removeRecipe={() => removeRecipe(meal.id)}
                  />
                );
              })}
            </div>

            <AddBox type="Lunch" addRecipeMeal={addRecipeMeal} />
            <div className="text-textColor font-bold text-2xl mb-3">Diner</div>
            <div className="flex flex-col gap-2">
              {dinner?.map((meal: any) => {
                return (
                  <MealDisplayItem
                    key={meal.id}
                    meal={meal}
                    removeRecipe={() => removeRecipe(meal.id)}
                  />
                );
              })}
            </div>
            <AddBox type="Diner" addRecipeMeal={addRecipeMeal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanForm;
