export const initAddIngredientModalState = {
  meal_id: 0,
  name: "",
  price: 0,
  calories: 0,
  carbs: 0,
  protein: 0,
  barcode: "",
  fat: 0,
  img: {},
  base_amount: 0,
  current_amount: 0,
  percentage_amount: 20,
};

export const calorieCalculatorInitState = {
  age: 0,
  gender: "",
  weight: 0,
  height: 0,
  activity: "",
  bodyFat: 0,
};
export const userProfileInitState = {
  id: 0,
  email: "",
  password: "",
  name: "",
  weight: 0,
  height: 0,
  bmi: 0,
  gender: 0,
  age: 0,
  img: "",
  calories: 0,
  fat: 0,
  activity_level: "",
  plan_id: 1,
};
export const createMealInitState = {
  id: 0,
  user_id: 0,
  name: "",
  image: "",
  videoUrl: "",
  ingredients: [],
  steps: [],
};
