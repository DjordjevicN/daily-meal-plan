import React, { useState } from "react";
import "./Creator.scss";
import UsersMeals from "./creatorComponents/usersMeals/UsersMeals";
import EditIngredient from "./creatorComponents/editIngredient/EditIngredient";
import CreateIngredient from "./creatorForms/createIngredient/CreateIngredient";
import CreateMealForm from "./creatorForms/createMealForm/CreateMealForm";
import Plan from "./creatorForms/createPlan/plan/Plan";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import { bindActionCreators } from "redux";

const Creator = () => {
  const [isCreatePlan, setIsCreatePlan] = useState(false);
  const [isCreateMeal, setIsCreateMeal] = useState(false);
  const [isCreateIngredient, setIsCreateIngredient] = useState(false);
  const dispatch = useDispatch();
  const { createPlan } = bindActionCreators(actionCreators, dispatch);

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
              <div className="blockTitle">
                <div className="blockTitle__content">
                  <h2>Create your Plan</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas excepturi blanditiis delectus consequatur, sit
                    eveniet dolores, inventore id molestias perferendis ipsum
                    accusamus aperiam rem impedit at, dignissimos a ea modi.
                  </p>
                </div>
              </div>
              {/* <UsersMeals /> */}
              <div className="action">
                <button onClick={() => setIsCreatePlan(!isCreatePlan)}>
                  Open Meal Plan
                </button>
                <button
                  disabled
                  className="createPlanBtn"
                  onClick={() => createPlan()}
                >
                  Create Meal Plan
                </button>
              </div>

              {isCreatePlan && <Plan />}
            </div>
          </div>
          <div className="line"></div>
          <div className="createMealBlock">
            <div className="createMealBlock__content">
              <div className="blockTitle">
                <div className="blockTitle__content">
                  <h2>Create your meal</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas excepturi blanditiis delectus consequatur, sit
                    eveniet dolores, inventore id molestias perferendis ipsum
                    accusamus aperiam rem impedit at, dignissimos a ea modi.
                  </p>
                </div>
              </div>
              <UsersMeals />
              <div className="action">
                <button onClick={() => setIsCreateMeal(!isCreateMeal)}>
                  Create Meal
                </button>
              </div>
              {isCreateMeal && (
                <CreateMealForm setIsCreateMeal={setIsCreateMeal} />
              )}
            </div>
          </div>
          <div className="line"></div>
          <div className="createIngredientBlock">
            <div className="createIngredientBlock__content">
              <div className="blockTitle">
                <div className="blockTitle__content">
                  <h2>Create New Ingredient</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas excepturi blanditiis delectus consequatur, sit
                    eveniet dolores, inventore id molestias perferendis ipsum
                    accusamus aperiam rem impedit at, dignissimos a ea modi.
                  </p>
                </div>
              </div>
              <EditIngredient />
              <div className="action">
                <button
                  onClick={() => setIsCreateIngredient(!isCreateIngredient)}
                >
                  Create Ingredient
                </button>
              </div>

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
