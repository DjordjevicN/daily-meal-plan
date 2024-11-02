import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  addRecipe,
  deleteRecipe,
  getRecipe,
  getRecipes,
  updateRecipe,
} from "../api/recipes";

export const useRecipeData = () => {
  return useQuery("recipes", getRecipes);
};

export const useAddRecipe = () => {
  const queryClient = useQueryClient();
  return useMutation(addRecipe, {
    onSuccess: (data) => {
      queryClient.setQueryData("recipes", (oldData) => {
        if (!oldData || !oldData.data) {
          return { data: [data.data] };
        }
        return { ...oldData, data: [...oldData.data, data.data] };
      });
    },
    onError: (error) => {
      console.error("Error adding meal:", error);
    },
  });
};

export const useDeleteRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteRecipe, {
    onSuccess: (data) => {
      queryClient.setQueryData("recipes", (oldData) => {
        return {
          ...oldData,
          data: oldData.data.filter((meal) => meal.id !== data.data.id),
        };
      });
    },
  });
};
export const useUpdateRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation(updateRecipe, {
    onSuccess: (data) => {
      queryClient.setQueryData("recipes", (oldData) => {
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
  return useQuery(["recipe", id], () => getRecipe(id));
};
