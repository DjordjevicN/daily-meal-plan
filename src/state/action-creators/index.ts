import { Action } from "./../actions/index";
import { ActionType } from "./../action-types/index";
import { Dispatch } from "redux";
import axios from "axios";

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};
export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};
export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};
export const getUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.get("http://localhost:3001/");
    console.log(response);

    dispatch({
      type: ActionType.GET_USER,
    });
  };
};
export const getAllIngredients = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.get(
      "http://localhost:3001/get_all_ingredients"
    );
    dispatch({
      type: ActionType.GET_ALL_INGREDIENTS,
      payload: response.data.results,
    });
  };
};
