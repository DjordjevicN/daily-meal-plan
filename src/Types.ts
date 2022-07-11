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
