import axios from "axios";

export const getMeals = async () => {
  return axios.get("http://localhost:4003/mealPlans");
};

export const getMeal = async (id: string) => {
  return axios.get(`http://localhost:4003/mealPlans/${id}`);
};

export const addMeal = async (meal: any) => {
  return axios.post("http://localhost:4003/mealPlans", meal);
};

export const deleteMeal = async (id: string) => {
  return axios.delete(`http://localhost:4003/mealPlans/${id}`);
};

export const updateMeal = async (id: string, meal: any) => {
  return axios.put(`http://localhost:4003/mealPlans/${id}`, meal);
};

export const getMealByName = async (name: string) => {
  return axios.get(`http://localhost:4003/mealPlans?name=${name}`);
};

export const getMealsByDate = async (date: string) => {
  return axios.get(`http://localhost:4003/mealPlans?date=${date}`);
};

export const getMealsByWeek = async (week: string) => {
  return axios.get(`http://localhost:4003/mealPlans?week=${week}`);
};

export const getMealsByMonth = async (month: string) => {
  return axios.get(`http://localhost:4003/mealPlans?month=${month}`);
};

export const getMealsByYear = async (year: string) => {
  return axios.get(`http://localhost:4003/mealPlans?year=${year}`);
};

export const getMealsByUser = async (userId: string) => {
  return axios.get(`http://localhost:4003/mealPlans?userId=${userId}`);
};

export const getMealsByUserAndDate = async (userId: string, date: string) => {
  return axios.get(
    `http://localhost:4003/mealPlans?userId=${userId}&date=${date}`
  );
};

export const getMealsByUserAndWeek = async (userId: string, week: string) => {
  return axios.get(
    `http://localhost:4003/mealPlans?userId=${userId}&week=${week}`
  );
};

export const getMealsByUserAndMonth = async (userId: string, month: string) => {
  return axios.get(
    `http://localhost:4003/mealPlans?userId=${userId}&month=${month}`
  );
};

export const getMealsByUserAndYear = async (userId: string, year: string) => {
  return axios.get(
    `http://localhost:4003/mealPlans?userId=${userId}&year=${year}`
  );
};
