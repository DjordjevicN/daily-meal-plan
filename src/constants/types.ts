export interface ICaloriesCalculateState {
  age: number;
  gender: string;
  weight: number;
  height: number;
  activity?: string;
  bodyFat?: number;
}
export interface IIngredients {
  id: number | string;
  meal_id: number;
  name: string;
  price: number;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  img: string;
  base_amount: number;
  current_amount: number;
  percentage_amount: number;
}
export interface IUser {
  id: number | string;
  email: string;
  password: string;
  name: string;
  weight: number;
  height: number;
  bmi?: number;
  gender: number;
  age: number;
  img: string;
  calories?: number;
  fat?: number;
  activity_level?: string;
  plan_id?: number;
}
export interface IFood {
  id: number;
  name: string;
  weight: string;
  img?: string;
  calories?: number | string;
  amount?: string;
}
export interface IData {
  meal_no: number;
  name: string;
  contents: IFood[];
}
