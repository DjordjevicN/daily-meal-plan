import { IIngredients, IUser } from "../../constants/types";
import { ActionType } from "./../action-types/index";

interface GetUserAction {
  type: ActionType.GET_USER;
  // payload: ActionType.GET_USER;
}
interface LoginUserAction {
  type: ActionType.LOGIN_USER;
  payload: IUser;
}
interface CreateUser {
  type: ActionType.CREATE_USER;
  payload: IUser;
}
interface GetAllIngredientsAction {
  type: ActionType.GET_ALL_INGREDIENTS;
  payload: IIngredients[];
}
interface GetIngByName {
  type: ActionType.GET_ING_BY_NAME;
  payload: IIngredients[];
}
export type Action =
  | CreateUser
  | GetAllIngredientsAction
  | GetUserAction
  | LoginUserAction
  | GetIngByName;
