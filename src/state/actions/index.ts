import {
  IIngredients,
  IUser,
  IMealInformation,
  IIngredientsProp,
  IStep,
  IDay,
} from "../../constants/types";
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
interface GetUsersMeals {
  type: ActionType.GET_USERS_MEALS;
  payload: IMealInformation[];
}
interface GetMealsIngredients {
  type: ActionType.GET_MEALS_INGREDIENTS;
  payload: IIngredientsProp[];
}
interface GetMealsSteps {
  type: ActionType.GET_MEALS_STEPS;
  payload: IStep[];
}
interface getDays {
  type: ActionType.GET_PLANE_DAYS;
  payload: IDay[];
}
interface GetAllMealsInDays {
  type: ActionType.GET_ALL_MEALS_IN_DAYS;
  payload: any;
}
interface GetPlanById {
  type: ActionType.GET_PLAN_BY_ID;
  payload: any;
}
interface CleanState {
  type: ActionType.CLEAN_STATE;
}

export type Action =
  | CreateUser
  | GetAllIngredientsAction
  | GetUserAction
  | LoginUserAction
  | GetIngByName
  | GetUsersMeals
  | GetMealsIngredients
  | GetMealsSteps
  | getDays
  | GetAllMealsInDays
  | CleanState
  | GetPlanById;
