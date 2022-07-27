import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ingredientReducer from "./ingredientReducer";
import ingredientSearch from "./ingredientSearch";

const reducers = combineReducers({
  user: userReducer,
  ingredients: ingredientReducer,
  ingredientSearch: ingredientSearch,
});
export default reducers;
export type State = ReturnType<typeof reducers>;
