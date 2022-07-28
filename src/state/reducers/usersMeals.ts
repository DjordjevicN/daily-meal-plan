import { Action } from "../actions/index";
import { IMealInformation } from "../../constants/types";
import { ActionType } from "../action-types";

const initState = [
  {
    id: 0,
    day_id: 0,
    plan_id: 0,
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
    weight: 0,
    meal_type: 0,
    videoUrl: "",
    user_id: 0,
  },
];

const reducer = (state: IMealInformation[] = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_USERS_MEALS:
      return (state = action.payload);

    default:
      return state;
  }
};
export default reducer;
