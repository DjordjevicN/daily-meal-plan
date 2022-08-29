import { Action } from "../actions/index";

import { ActionType } from "../action-types";
const initState: any = [];
const reducer = (state: any = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_SHOPPING_ITEMS:
      return (state = action.payload);
    case ActionType.GET_SHOPPING_ITEMS_BY_USER_ID:
      return (state = action.payload);

    // case ActionType.GET_PLAN_BY_ID:
    //   return (state = { ...state, ...action.payload });
    // case ActionType.GET_PLANE_DAYS:
    //   return { ...state, days: action.payload };
    default:
      return state;
  }
};
export default reducer;
