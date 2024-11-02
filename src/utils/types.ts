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
  owner: string;
  name: string;
  created: string;
  price: number;
  active: boolean;
  public: boolean;
  days: IDay[];
}
