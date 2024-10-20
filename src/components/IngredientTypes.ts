export interface IIngredient {
  image?: string;
  description?: string;
  name: string;
  quantity?: string;
  unit?: string;
  nutrients?: {
    calories?: string;
    carbs?: string;
    fat?: string;
    protein?: string;
    sugar?: string;
  };
}
