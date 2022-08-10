export const initAddIngredientModalState = {
  meal_id: 0,
  name: "",
  price: 0,
  calories: 0,
  carbs: 0,
  protein: 0,
  barcode: "",
  fat: 0,
  img: "",
};

export const calorieCalculatorInitState = {
  age: null,
  gender: "",
  weight: null,
  height: null,
  activity: null,
  bodyFat: null,
  goal: null,
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
  plan_id: 0,
  todaysMeals: [],
};
export const createMealInitState = {
  id: 0,
  user_id: 0,
  name: "",
  img: "",
  videoUrl: "",
  ingredients: [],
  steps: [],
};
