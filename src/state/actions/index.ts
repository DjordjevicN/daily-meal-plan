import { IIngredients, IUser } from "./../../types/databaseTypes";
import { ActionType } from "./../action-types/index";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}
interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}
interface BankruptAction {
  type: ActionType.BANKRUPT;
}
interface GetUserAction {
  type: ActionType.GET_USER;
  // payload: ActionType.GET_USER;
}
interface GetAllIngredientsAction {
  type: ActionType.GET_ALL_INGREDIENTS;
  payload: IIngredients[];
}
export type Action =
  | BankruptAction
  | WithdrawAction
  | DepositAction
  | GetAllIngredientsAction
  | GetUserAction;
