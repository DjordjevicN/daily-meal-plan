import { Action } from "../actions/index";

import { ActionType } from "../action-types";
const initState = {
  days: [],
  meals: [],
};
const reducer = (state: any = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_PLAN_BY_ID:
      return (state = { ...state, ...action.payload });

    case ActionType.GET_PLANE_DAYS:
      console.log(action.payload);
      console.log(state.days);
      return {
        ...state,
        days: [...state.days, ...action.payload],
      };

    default:
      return state;
  }
};
export default reducer;
