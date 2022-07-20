import { Action } from "../actions/index";
import { IIngredients } from "../../constants/types";

import { ActionType } from "../action-types";

const initState = [
  {
    id: 1,
    meal_id: 0,
    name: "",
    price: 0,
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
    img: "",
    base_amount: 0,
    current_amount: 0,
    percentage_amount: 20,
  },
];

const reducer = (state: IIngredients[] = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_INGREDIENTS:
      return (state = action.payload);

    default:
      return state;
  }
};
export default reducer;
