import { Action } from "../actions/index";
import { IUser } from "../../constants/types";
import { ActionType } from "../action-types";
import { userProfileInitState } from "../../constants/initStates";

const reducer = (state: IUser = userProfileInitState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_USER:
      return state;
    case ActionType.LOGIN_USER:
      return action.payload;
    case ActionType.GET_TODAYS_MEALS:
      return { ...state, todaysMeals: action.payload };
    default:
      return state;
  }
};
export default reducer;
