import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  getMealPlans,
  getMealPlanByOwnerId,
  addMealPlan,
  deleteMealPlan,
  getMealPlanById,
} from "../api/mealPlans";

export const useMealPlanData = () => {
  return useQuery("mealPlans", getMealPlans, {
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
    staleTime: 0,
  });
};

export const useMealPlanById = (id) => {
  return useQuery(["mealPlan", id], () => getMealPlanById(id), {
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
    staleTime: 0,
  });
};

export const useMealPlanByOwnerId = (ownerId) => {
  return useQuery(["mealPlan", ownerId], () => getMealPlanByOwnerId(ownerId), {
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
    staleTime: 0,
  });
};

export const useAddNewPlan = () => {
  const queryClient = useQueryClient();
  return useMutation(addMealPlan, {
    onSuccess: (data) => {
      queryClient.setQueryData("mealPlan", (oldData) => {
        if (!oldData || !oldData.data) {
          return { data: [data.data] };
        }
        return { ...oldData, data: [...oldData.data, data.data] };
      });
    },
    onError: (error) => {
      console.error("Error adding plan:", error);
    },
  });
};

export const useDeletePlan = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteMealPlan, {
    onSuccess: (data) => {
      queryClient.setQueryData("mealPlan", (oldData) => {
        return {
          ...oldData,
          data: oldData.data.filter((meal) => meal.id !== data.data.id),
        };
      });
    },
  });
};
