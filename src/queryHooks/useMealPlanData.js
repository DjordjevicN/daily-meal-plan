import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  getMealPlans,
  getMealPlanByOwnerId,
  addMealPlan,
  deleteMealPlan,
} from "../api/mealPlans";

export const useMealPlanData = () => {
  return useQuery("mealPlans", getMealPlans, {
    refetchOnWindowFocus: true, // Refetches when the window is refocused
    refetchInterval: 5000, // Refetches every 5000ms (5 seconds)
    staleTime: 0, // Adjust based on how frequently your data changes
  });
};

export const useMealPlanByOwnerId = (ownerId) => {
  return useQuery(["mealPlan", ownerId], () => getMealPlanByOwnerId(ownerId), {
    refetchOnWindowFocus: true, // Refetches when the window is refocused
    refetchInterval: 5000, // Refetches every 5000ms (5 seconds)
    staleTime: 0, // Adjust based on how frequently your data changes
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
