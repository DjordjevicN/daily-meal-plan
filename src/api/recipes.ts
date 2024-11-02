import axios from "axios";

export const getRecipes = async () => {
  return axios.get("http://localhost:4002/recipes");
};

export const getRecipe = async (id: string) => {
  return axios.get(`http://localhost:4002/recipes/${id}`);
};

export const addRecipe = async (meal: any) => {
  return axios.post("http://localhost:4002/recipes", meal);
};

export const deleteRecipe = async (id: string) => {
  return axios.delete(`http://localhost:4002/recipes/${id}`);
};

export const updateRecipe = async (id: string, meal: any) => {
  return axios.put(`http://localhost:4002/recipes/${id}`, meal);
};

export const getRecipeByName = async (name: string) => {
  return axios.get(`http://localhost:4002/recipes?name=${name}`);
};

export const getRecipeByDate = async (date: string) => {
  return axios.get(`http://localhost:4002/recipes?date=${date}`);
};

export const getRecipesByWeek = async (week: string) => {
  return axios.get(`http://localhost:4002/recipes?week=${week}`);
};

export const getRecipeByMonth = async (month: string) => {
  return axios.get(`http://localhost:4002/recipes?month=${month}`);
};

export const getRecipesByYear = async (year: string) => {
  return axios.get(`http://localhost:4002/recipes?year=${year}`);
};

export const getRecipesByUser = async (userId: string) => {
  return axios.get(`http://localhost:4002/recipes?userId=${userId}`);
};

export const getRecipesByUserAndDate = async (userId: string, date: string) => {
  return axios.get(
    `http://localhost:4002/recipes?userId=${userId}&date=${date}`
  );
};

export const getRecipesByUserAndWeek = async (userId: string, week: string) => {
  return axios.get(
    `http://localhost:4002/recipes?userId=${userId}&week=${week}`
  );
};

export const getRecipesByUserAndMonth = async (
  userId: string,
  month: string
) => {
  return axios.get(
    `http://localhost:4002/recipes?userId=${userId}&month=${month}`
  );
};

export const getRecipesByUserAndYear = async (userId: string, year: string) => {
  return axios.get(
    `http://localhost:4002/recipes?userId=${userId}&year=${year}`
  );
};
