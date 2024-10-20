import { useState } from "react";
import { IngredientsForm } from "../components/IngredientsForm";
import MealForm from "../components/MealForm";
import PlanForm from "../components/PlanForm";

export const Creator = () => {
  const [ingredientCreator, setIngredientCreator] = useState(false);
  const [mealCreator, setMealCreator] = useState(false);
  const [planCreator, setPlanCreator] = useState(false);

  const handleOpenForm = (formType: "ingredient" | "meal" | "plan") => {
    setIngredientCreator(
      formType === "ingredient" ? !ingredientCreator : false
    );
    setMealCreator(formType === "meal" ? !mealCreator : false);
    setPlanCreator(formType === "plan" ? !planCreator : false);
  };

  return (
    <div className="px-3 pt-3 pb-60">
      <h1 className="text-brand text-xl mb-6">Creator</h1>
      <button
        className={`mt-1 text-white p-2 w-full rounded-lg ${
          ingredientCreator ? "bg-red-500" : "bg-brand"
        }`}
        onClick={() => handleOpenForm("ingredient")}
      >
        New Ingredient
      </button>
      {ingredientCreator && <IngredientsForm />}
      <button
        className={`mt-1 text-white p-2 w-full rounded-lg ${
          mealCreator ? "bg-red-500" : "bg-brand"
        }`}
        onClick={() => handleOpenForm("meal")}
      >
        New Meal
      </button>
      {mealCreator && <MealForm />}
      <button
        className={`mt-1 text-white p-2 w-full rounded-lg ${
          planCreator ? "bg-red-500" : "bg-brand"
        }`}
        onClick={() => handleOpenForm("plan")}
      >
        New Plan
      </button>
      {planCreator && <PlanForm />}
    </div>
  );
};
