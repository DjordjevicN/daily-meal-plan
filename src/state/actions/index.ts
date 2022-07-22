import { IIngredients, IUser } from "../../constants/types";
import { ActionType } from "./../action-types/index";

interface GetUserAction {
  type: ActionType.GET_USER;
  // payload: ActionType.GET_USER;
}
interface CreateUser {
  type: ActionType.CREATE_USER;
  payload: IUser;
}
interface GetAllIngredientsAction {
  type: ActionType.GET_ALL_INGREDIENTS;
  payload: IIngredients[];
}
export type Action = CreateUser | GetAllIngredientsAction | GetUserAction;
