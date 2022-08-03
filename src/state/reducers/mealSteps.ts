import { Action } from "../actions/index";
import { ActionType } from "../action-types";
import { IStep } from "../../constants/types";

const initState = [
  {
    id: 0,
    meal_id: 0,
    title: "",
    description: "",
    video: "",
    image: "",
    identNum: 0,
    stepNum: 0,
  },
];

const reducer = (state: IStep[] = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_MEALS_STEPS:
      return (state = action.payload);

    default:
      return state;
  }
};
export default reducer;
