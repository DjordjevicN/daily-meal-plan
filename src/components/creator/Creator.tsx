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
  // get all plans
  //get users plans
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;

// <div className="creative">
// <div className="createIngredientBlock">
//   <div className="createIngredientBlock__content">
//     <div className="blockTitle">
//       <div className="blockTitle__content">
//         <h2>Create New Ingredient</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Voluptas excepturi blanditiis delectus consequatur, sit
//           eveniet dolores, inventore id molestias perferendis ipsum
//           accusamus aperiam rem impedit at, dignissimos a ea modi.
//         </p>
//       </div>
//     </div>
//     <EditIngredient />
//     <div className="action">
//       <button
//         onClick={() => setIsCreateIngredient(!isCreateIngredient)}
//       >
//         Create Ingredient
//       </button>
//     </div>

//     {isCreateIngredient && (
//       <CreateIngredient
//         setIsCreateIngredient={setIsCreateIngredient}
//       />
//     )}
//   </div>
// </div>

// <div className="createPlanBlock">
//   <div className="createPlanBlock__content">
//     <div className="displayPlans">
//       <div className="displayPlans__content">
//         <h2>Create your Plan</h2>
//         <div className="plansDisplay">
//           {getAllPlans().length > 0 &&
//             getAllPlans().map((item) => {
//               return <PlanDisplay />;
//             })}
//         </div>
//       </div>
//     </div>
//     {/* <UsersMeals /> */}
//     <div className="action">
//       <button onClick={() => setIsCreatePlan(!isCreatePlan)}>
//         Open Meal Plan
//       </button>
//       <button
//         // disabled
//         className="createPlanBtn"
//         onClick={() => setOpenModal(true)}
//       >
//         Create Meal Plan
//       </button>
//     </div>

//     {isCreatePlan && <Plan />}
//   </div>
// </div>

// <div className="createMealBlock">
//   <div className="createMealBlock__content">
//     <div className="blockTitle">
//       <div className="blockTitle__content">
//         <h2>Create your meal</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Voluptas excepturi blanditiis delectus consequatur, sit
//           eveniet dolores, inventore id molestias perferendis ipsum
//           accusamus aperiam rem impedit at, dignissimos a ea modi.
//         </p>
//       </div>
//     </div>
//     <UsersMeals />
//     <div className="action">
//       <button onClick={() => setIsCreateMeal(!isCreateMeal)}>
//         Create Meal
//       </button>
//     </div>
//     {isCreateMeal && (
//       <CreateMealForm setIsCreateMeal={setIsCreateMeal} />
//     )}
//   </div>
// </div>
// </div>
