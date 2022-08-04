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
  barcode?: string;
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
  weight: number | undefined;
  height: number | undefined;
  bmi?: number | undefined;
  gender: number | undefined;
  age: number | undefined;
  img: string;
  calories_needed?: number | undefined;
  fat?: number | undefined;
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
  contents?: IFood[];
}
export interface IMealInformation {
  id: number | string;
  day_id: number;
  plan_id: number;
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
  weight: number;
  meal_type: number;
  videoUrl: string;
  user_id: number | string;
}
export interface IIngredientsProp {
  id: number | string;
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
  amount: number | string;
  unit: string;
}
export interface IStep {
  id: number | string;
  meal_id: number | string;
  title: string;
  description: string;
  video: string;
  image: string;
  identNum: number | string;
  stepNum: number | string;
}
export interface IInitControlState {
  editMealOpen: boolean;
}
export interface IDay {
  id: number | string;
  plan_id: number | string;
  date_id: number | string;
  name: string;
  calorie_limit: number | string;
  weekDay_id: number;
}
