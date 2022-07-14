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
}
export interface IUser {
  id: number | string;
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
