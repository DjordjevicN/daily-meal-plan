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
import Modal from "../../UiComponents/template/Modal/Modal";
import PlanDisplay from "../../UiComponents/organism/PlanDisplay/PlanDisplay";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";
import { AiOutlineEdit } from "react-icons/ai";

const Creator = () => {
  const [isEditListOpen, setIsEditListOpen] = useState(true);
  const [isCreatePlan, setIsCreatePlan] = useState(false);
  const [isEditPlan, setIsEditPlan] = useState(false);
  const [isCreateMeal, setIsCreateMeal] = useState(false);
  const [isCreateIngredient, setIsCreateIngredient] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { createPlan } = bindActionCreators(actionCreators, dispatch);
  const getAllPlans = () => {
    return [1, 2, 3, 4, 5];
  };

  return (
    <div className="creator">
      {openModal && (
        <Modal close={() => setOpenModal(false)} proceed={() => createPlan()}>
          Create new Meal Plan
        </Modal>
      )}
      <div className="creator__content">
        <div className="addButton-wrap">
          <ButtonShell
            onClick={() => setIsEditListOpen(!isEditListOpen)}
            customStyle={{ width: "20px" }}
            type="mono"
          >
            +
          </ButtonShell>

          {isEditListOpen && (
            <div className="actions">
              <ButtonShell
                onClick={() => setIsCreatePlan(!isCreatePlan)}
                customStyle={{ borderRadius: "8px" }}
                type="mono"
              >
                + New Plan
              </ButtonShell>
              <ButtonShell
                onClick={() => setIsCreateMeal(!isCreateMeal)}
                customStyle={{ borderRadius: "8px" }}
                type="mono"
              >
                + New Meal
              </ButtonShell>
              <ButtonShell
                onClick={() => setIsCreateIngredient(!isCreateIngredient)}
                customStyle={{ borderRadius: "8px" }}
                type="mono"
              >
                + New Ingredient
              </ButtonShell>
            </div>
          )}
        </div>
        <div className="planer">
          <div className="planer__content">
            <div className="create-ingredient">
              {isCreateIngredient && (
                <CreateIngredient
                  setIsCreateIngredient={setIsCreateIngredient}
                />
              )}
            </div>
            <div className="currentPlan">
              {isCreatePlan && <div>create plan</div>}
            </div>
            <div className="crate-meal">
              {isCreateMeal && (
                <CreateMealForm setIsCreateMeal={setIsCreateMeal} />
              )}
            </div>
            <div className="sectionTitle">
              <h1>Meal plan</h1>

              <div className="button-wrap">
                <ButtonShell
                  onClick={() => setIsEditPlan(!isEditPlan)}
                  customStyle={{ borderRadius: "8px", width: "150px" }}
                  type="mono"
                  icon={<AiOutlineEdit />}
                >
                  Edit Plan
                </ButtonShell>
              </div>
            </div>
            <div className="editPlan">
              <div className="edit-plan">{isEditPlan && <Plan />}</div>
            </div>
            <div className="plansDisplay">
              {getAllPlans().length > 0 &&
                getAllPlans().map((item) => {
                  return <PlanDisplay />;
                })}
            </div>
            <div className="mealDisplay">
              <p className="sectionTitle">Your Meals</p>
              <UsersMeals />
            </div>
            <div className="ingredientSearch">
              <EditIngredient />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
