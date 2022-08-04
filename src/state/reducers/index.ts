import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ingredientReducer from "./ingredientReducer";
import ingredientSearch from "./ingredientSearch";
import mealsIngredients from "./mealsIngredients";
import usersMeals from "./usersMeals";
import mealSteps from "./mealSteps";
import usersPlan from "./usersPlan";

const reducers = combineReducers({
  user: userReducer,
  ingredients: ingredientReducer,
  ingredientSearch: ingredientSearch,
  usersMeals: usersMeals,
  mealsIngredients: mealsIngredients,
  mealSteps: mealSteps,
  usersPlan: usersPlan,
});
export default reducers;
export type State = ReturnType<typeof reducers>;
