import { Action } from "../actions/index";
import { IUser } from "../../types/databaseTypes";

import { ActionType } from "../action-types";

const initState = {
  id: 1,
  email: "",
  password: "",
  name: "Nikola",
  weight: 0,
  height: 0,
  bmi: 0,
  gender: 0,
  age: 0,
  img: "",
};

const reducer = (state: IUser = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_USER:
      return state;
    default:
      return state;
  }
};
export default reducer;
