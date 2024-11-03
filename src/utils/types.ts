export interface IRecipesSettings {
  id: string;
  originalRecipeId: number;
  quantity: number;
  unit: string;
  whenToEat: string[];
}

export interface IDay {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  recipesSettings: IRecipesSettings[];
}

export interface MealPlan {
  id: string;
  image: string;
  owner: string;
  name: string;
  created: string;
  price: number;
  active: boolean;
  public: boolean;
  days: IDay[];
}
//

export interface User {
  id: string;
  username: string;
  password: string;
  role: string;
  avatar: string;
  email: string;
  subscriptionLevel: number;
  subscriptionEndDate: string;
  createdAt: string;
  updatedAt: string;
  mealPlanIds: string[];
  activeMealPlanId: string;
  recipes: string[];
}

export interface MutationVariables {
  id: string;
  user: User;
}
