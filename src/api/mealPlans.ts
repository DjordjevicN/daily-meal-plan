//  http://localhost:4003/mealPlans

import axios from "axios";

export const getMealPlans = async () => {
  return axios.get("http://localhost:4003/mealPlans");
};

export const getMealPlanById = async (id: string) => {
  return axios.get(`http://localhost:4003/mealPlans/${id}`);
};

export const addMealPlan = async (mealPlan: any) => {
  return axios.post("http://localhost:4003/mealPlans", mealPlan);
};

export const deleteMealPlan = async (id: string) => {
  return axios.delete(`http://localhost:4003/mealPlans/${id}`);
};
export const updateMealPlanById = async (id: string, mealPlan: any) => {
  return axios.put(`http://localhost:4003/mealPlans/${id}`, mealPlan);
};

export const getMealPlanByTitle = async (title: string) => {
  return axios.get(`http://localhost:4003/mealPlans?title=${title}`);
};

export const getMealPlanByOwnerId = async (ownerId: string) => {
  return axios.get(`http://localhost:4003/mealPlans?owner=${ownerId}`);
};
