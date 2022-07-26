import { Action } from "../actions/index";
import { IIngredients } from "../../constants/types";

import { ActionType } from "../action-types";

const initState: IIngredients[] = [];

const reducer = (state: IIngredients[] = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ING_BY_NAME:
      return (state = action.payload);

    default:
      return state;
  }
};
export default reducer;
