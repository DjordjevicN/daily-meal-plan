import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  addIngredient,
  deleteIngredient,
  getIngredient,
  getIngredientByName,
  getIngredients,
} from "../api/ingredients";

export const useIngredientData = () => {
  return useQuery("ingredients", getIngredients);
};

export const useIngredientById = (id) => {
  return useQuery(["ingredient", id], () => getIngredient(id));
};

export const useIngredientByName = (name) => {
  return useQuery(["ingredient", name], () => getIngredientByName(name), {
    enabled: !!name,
  });
};

export const useAddIngredient = (ingredient) => {
  const queryClient = useQueryClient();
  return useMutation(addIngredient, {
    onSuccess: (data) => {
      queryClient.setQueryData("ingredients", (oldData) => {
        if (!oldData || !oldData.data) {
          console.log("oldData is undefined");
          return { data: [data.data] };
        }
        return { ...oldData, data: [...oldData.data, data.data] };
      });
    },
  });
};

export const useDeleteIngredient = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteIngredient, {
    onSuccess: (data) => {
      queryClient.setQueryData("ingredients", (oldData) => {
        return {
          ...oldData,
          data: oldData.data.filter(
            (ingredient) => ingredient.id !== data.data.id
          ),
        };
      });
    },
  });
};
