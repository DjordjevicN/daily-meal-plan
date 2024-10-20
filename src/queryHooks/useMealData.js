import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  addMeal,
  deleteMeal,
  getMeal,
  getMeals,
  updateMeal,
} from "../api/meals";

export const useMealData = () => {
  return useQuery("meals", getMeals);
};

export const useAddMeal = (meal) => {
  const queryClient = useQueryClient();
  return useMutation(addMeal, {
    onSuccess: (data) => {
      queryClient.setQueryData("meals", (oldData) => {
        if (!oldData || !oldData.data) {
          console.log("oldData is undefined");
          return { data: [data.data] };
        }
        return { ...oldData, data: [...oldData.data, data.data] };
      });
    },
  });
};

export const useDeleteMeal = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteMeal, {
    onSuccess: (data) => {
      queryClient.setQueryData("meals", (oldData) => {
        return {
          ...oldData,
          data: oldData.data.filter((meal) => meal.id !== data.data.id),
        };
      });
    },
  });
};
export const useUpdateMeal = () => {
  const queryClient = useQueryClient();

  return useMutation(updateMeal, {
    onSuccess: (data) => {
      queryClient.setQueryData("meals", (oldData) => {
        return {
          ...oldData,
          data: oldData.data.map((meal) =>
            meal.id === data.data.id ? data.data : meal
          ),
        };
      });
    },
  });
};

export const useMealById = (id) => {
  return useQuery(["meal", id], () => getMeal(id));
};
