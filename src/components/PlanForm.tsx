import { useId, useState } from "react";
import arrowRight from "../assets/icons/arrow-right.svg";
import { MealDisplayItem } from "./MealDisplayItem";
import { AddBox } from "./AddBox";
import { editRecipeFormData } from "../features/appControlSlice";
import { useDispatch } from "react-redux";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const PlanForm = () => {
  const [day, setDay] = useState(0);
  interface IRecipe {
    id: string;
    name: string;
    image: string;
    caloriesTotal: number | null;
    whenToEat: string;
    description: string;
    worksWellFor: string[];
    recipes: any[];
  }

  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const nextRecipeId = useId();
  const breakfast = recipes.filter((item) => item.whenToEat === "Breakfast");
  const lunch = recipes.filter((item) => item.whenToEat === "Lunch");
  const dinner = recipes.filter((item) => item.whenToEat === "Diner");
  const dispatch = useDispatch();
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

  const openRecipeSearch = () => {
    console.log("open meal search");
  };

  const openRecipeEdit = (id: string) => {
    dispatch(editRecipeFormData(recipes.find((item) => item.id === id)));
  };

  const addRecipeMeal = (type: string) => {
    const id = `${nextRecipeId}${recipes.length}`;
    const newRecipe = {
      id: id,
      name: "",
      image: "",
      caloriesTotal: null,
      whenToEat: type,
      description: "",
      worksWellFor: [],
      recipes: [],
    };
    setRecipes([...recipes, newRecipe]);
  };

  const removeRecipe = (id: string) => {
    setRecipes(recipes.filter((item) => item.id !== id));
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
          <div className="min-w-36 flex justify-center font-bold">
            {days[day]}
          </div>
        </div>
        <div className="inline-block cursor-pointer" onClick={() => nextDay()}>
          <img src={arrowRight} alt="right" />
        </div>
      </div>
      <div className="">
        <div className="max-w-[500px] mx-auto">
          <div className="text-textColor font-bold text-2xl mb-3">
            Breakfast
          </div>
          <div className="flex flex-col gap-2">
            {breakfast.map((meal) => {
              return (
                <MealDisplayItem
                  key={meal.id}
                  meal={meal}
                  openRecipeSearch={openRecipeSearch}
                  removeRecipe={() => removeRecipe(meal.id)}
                  editMeal={() => openRecipeEdit(meal.id)}
                />
              );
            })}
          </div>
          <AddBox type="Breakfast" addRecipeMeal={addRecipeMeal} />
          <div className="text-textColor font-bold text-2xl mb-3">Lunch</div>
          <div className="flex flex-col gap-2">
            {lunch.map((meal) => {
              return (
                <MealDisplayItem
                  key={meal.id}
                  meal={meal}
                  openRecipeSearch={openRecipeSearch}
                  removeRecipe={() => removeRecipe(meal.id)}
                  editMeal={() => openRecipeEdit(meal.id)}
                />
              );
            })}
          </div>

          <AddBox type="Lunch" addRecipeMeal={addRecipeMeal} />
          <div className="text-textColor font-bold text-2xl mb-3">Diner</div>
          <div className="flex flex-col gap-2">
            {dinner.map((meal) => {
              return (
                <MealDisplayItem
                  key={meal.id}
                  meal={meal}
                  openRecipeSearch={openRecipeSearch}
                  removeRecipe={() => removeRecipe(meal.id)}
                  editMeal={() => openRecipeEdit(meal.id)}
                />
              );
            })}
          </div>
          <AddBox type="Diner" addRecipeMeal={addRecipeMeal} />
        </div>
      </div>
    </div>
  );
};

export default PlanForm;
