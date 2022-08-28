import { Action } from "../actions/index";
import { ActionType } from "../action-types";

const initState = {
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
  mealsIngredients: [],
  mealSteps: [],
};

const reducer = (state: any = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_MEAL_BY_ID:
      return (state = { ...state, ...action.payload });
    case ActionType.GET_MEALS_INGREDIENTS:
      return { ...state, mealsIngredients: action.payload };
    case ActionType.GET_MEALS_STEPS:
      return { ...state, mealSteps: action.payload };
    default:
      return state;
  }
};
export default reducer;
