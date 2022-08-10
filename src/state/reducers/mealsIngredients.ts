import { Action } from "../actions/index";
import { ActionType } from "../action-types";

const initState = [
  {
    id: 0,
    name: "",
    price: 0,
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
    img: "",
    base_amount: 0,
    current_amount: 0,
    percentage_amount: 0,
    amount: 0,
    unit: "",
  },
];

const reducer = (state: any = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_MEALS_INGREDIENTS:
      return (state = action.payload);

    default:
      return state;
  }
};
export default reducer;
