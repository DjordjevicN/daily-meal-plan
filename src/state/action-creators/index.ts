import { Action } from "./../actions/index";
import { ActionType } from "./../action-types/index";
import { Dispatch } from "redux";
import axios from "axios";
import { isLocal } from "../../constants/utilFunc";

const baseUrl = isLocal()
  ? "http://localhost:3001"
  : "https://jelovnik.nikola-djordjevic.com";

export const getUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.get(`${baseUrl}/`);
    console.log(response);

    dispatch({
      type: ActionType.GET_USER,
    });
  };
};
export const getAllIngredients = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.get(`${baseUrl}/get_all_ingredients`);
    dispatch({
      type: ActionType.GET_ALL_INGREDIENTS,
      payload: response.data.results,
    });
  };
};
export const addNewIngredients = (value: any) => {
  console.log(value);

  return async (dispatch: any) => {
    console.log(value);

    await axios.post(`${baseUrl}/add_ingredients`, value);
    dispatch(getAllIngredients());
  };
};
export const deleteIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}/delete_ing`, { value });
    dispatch(getAllIngredients());
  };
};
export const buyIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}/purchase_made`, { value });
    dispatch(getAllIngredients());
  };
};

export const editIngredients = (value: any) => {
  return async (dispatch: any) => {
    await axios.post(`${baseUrl}/edit_ingredients`, { value });
    dispatch(getAllIngredients());
  };
};
