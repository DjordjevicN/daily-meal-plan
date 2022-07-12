import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  bank: bankReducer,
  user: userReducer,
});
export default reducers;
export type State = ReturnType<typeof reducers>;
