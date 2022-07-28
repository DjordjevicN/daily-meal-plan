import React, { useState } from "react";
import "./Creator.scss";
import UsersMeals from "./creatorComponents/usersMeals/UsersMeals";
import CreateIngredient from "./creatorForms/createIngredient/CreateIngredient";
import CreateMealForm from "./creatorForms/createMealForm/CreateMealForm";

const Creator = () => {
  const [isCreatePlan, setIsCreatePlan] = useState(false);
  const [isCreateMeal, setIsCreateMeal] = useState(false);
  const [isCreateIngredient, setIsCreateIngredient] = useState(false);

  return (
    <div className="creator">
      <div className="creator__content">
        <div className="screenTitle">
          <h2>Creator</h2>
          <p>
            Here you can create Meal, Meal Plan and add Ingredients if they are
            not in our database
          </p>
        </div>
        <div className="creative">
          <div className="createPlanBlock">
            <div className="createPlanBlock__content">
              <button onClick={() => setIsCreatePlan(!isCreatePlan)}>
                Create MealPlan
              </button>
              {isCreatePlan && <div className="creator_form">form</div>}
            </div>
          </div>
          <div className="createMealBlock">
            <div className="createMealBlock__content">
              <UsersMeals />
              <button onClick={() => setIsCreateMeal(!isCreateMeal)}>
                Create Meal
              </button>
              {isCreateMeal && (
                <CreateMealForm setIsCreateMeal={setIsCreateMeal} />
              )}
            </div>
          </div>
          <div className="createIngredientBlock">
            <div className="createIngredientBlock__content">
              <button
                onClick={() => setIsCreateIngredient(!isCreateIngredient)}
              >
                Create Ingredient
              </button>
              {isCreateIngredient && (
                <CreateIngredient
                  setIsCreateIngredient={setIsCreateIngredient}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
