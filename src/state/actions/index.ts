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
}
export type Action =
  | BankruptAction
  | WithdrawAction
  | DepositAction
  | GetUserAction;

export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  weight: number;
  height: number;
  bmi: number;
  gender: number;
  age: number;
  img: string;
}
