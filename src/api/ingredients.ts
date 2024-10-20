import axios from "axios";

export const getIngredients = async () => {
  return axios.get("http://localhost:4001/ingredients");
};

export const addIngredient = async (ingredient: any) => {
  return axios.post("http://localhost:4001/ingredients", ingredient);
};

export const deleteIngredient = async (id: string) => {
  return axios.delete(`http://localhost:4001/ingredients/${id}`);
};

export const updateIngredient = async (id: string, ingredient: any) => {
  return axios.put(`http://localhost:4001/ingredients/${id}`, ingredient);
};

export const getIngredient = async (id: string) => {
  return axios.get(`http://localhost:4001/ingredients/${id}`);
};

export const getIngredientByName = async (name: string) => {
  return axios.get(`http://localhost:4001/ingredients?name=${name}`);
};
