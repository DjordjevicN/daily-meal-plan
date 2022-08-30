import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ingredientReducer from "./ingredientReducer";
import ingredientSearch from "./ingredientSearch";
import mealsIngredients from "./mealsIngredients";
import usersMeals from "./usersMeals";
import shoppingList from "./shoppingList";
import plans from "./plans";

import usersPlan from "./usersPlan";
import mealDisplay from "./mealDisplay";

const reducers = combineReducers({
  user: userReducer,
  ingredients: ingredientReducer,
  ingredientSearch: ingredientSearch,
  usersMeals: usersMeals,
  mealsIngredients: mealsIngredients,
  usersPlan: usersPlan,
  mealDisplay: mealDisplay,
  shoppingList: shoppingList,
  plans: plans,
});
export default reducers;
export type State = ReturnType<typeof reducers>;
