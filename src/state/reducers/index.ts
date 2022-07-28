import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ingredientReducer from "./ingredientReducer";
import ingredientSearch from "./ingredientSearch";
import usersMeals from "./usersMeals";

const reducers = combineReducers({
  user: userReducer,
  ingredients: ingredientReducer,
  ingredientSearch: ingredientSearch,
  usersMeals: usersMeals,
});
export default reducers;
export type State = ReturnType<typeof reducers>;
