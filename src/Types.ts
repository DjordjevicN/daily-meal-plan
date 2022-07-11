export interface IFood {
  id: number;
  name: string;
  weight: string;
}
export interface IData {
  meal_no: number;
  name: string;
  contents: IFood[];
}
