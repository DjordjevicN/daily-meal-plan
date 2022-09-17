import { Action } from "../actions/index";

import { ActionType } from "../action-types";

const initState: any = [];

const reducer = (state: any = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_BASIC_FOOD:
      return (state = action.payload);

    default:
      return state;
  }
};
export default reducer;
