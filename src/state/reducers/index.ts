import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ingredientReducer from "./ingredientReducer";

const reducers = combineReducers({
  user: userReducer,
  ingredients: ingredientReducer,
});
export default reducers;
export type State = ReturnType<typeof reducers>;
