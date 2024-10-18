import { useForm } from "react-hook-form";
import {
  useAddIngredient,
  useDeleteIngredient,
  useIngredientById,
  useIngredientData,
} from "../queryHooks/useIngredientData";
import { DevTool } from "@hookform/devtools";

interface IIngredient {
  image?: string;
  description?: string;
  name: string;
  quantity?: string;
  unit?: string;
  nutrients?: {
    calories?: string;
    carbs?: string;
    fat?: string;
    protein?: string;
    sugar?: string;
  };
}
export const Ingredients = () => {
  const { register, handleSubmit, control, reset } = useForm();
  const { data: ingredient } = useIngredientById("83dd");
  const { data: ingredients } = useIngredientData();
  const { mutate: deleteIngredient } = useDeleteIngredient();
  const { mutate: addIngredient } = useAddIngredient();

  const handleDelete = (id: string) => async () => {
    console.log("delete", id);
    deleteIngredient(id);
  };

  const handleAddIngredient = (data: any) => {
    const newIngredient = {
      name: data.name,
      unit: data.unit,
      description: data.description,
      nutrients: {
        calories: data.calories,
        carbs: data.carbs,
        fat: data.fat,
        protein: data.protein,
        sugar: data.sugar,
      },
    };

    addIngredient(newIngredient);
    reset();
  };

  console.log(ingredient);

  return (
    <div>
      <p>ingredient</p>
      <div>
        <form
          onSubmit={handleSubmit(handleAddIngredient)}
          className="flex flex-col"
        >
          <input
            className="mb-1"
            type="text"
            {...register("name")}
            placeholder="Name"
          />
          <input
            className="mb-1"
            type="text"
            {...register("unit")}
            placeholder="unit"
          />
          <input
            className="mb-1"
            type="text"
            {...register("calories")}
            placeholder="calories"
          />
          <input
            className="mb-1"
            type="text"
            {...register("carbs")}
            placeholder="carbs"
          />
          <input
            className="mb-1"
            type="text"
            {...register("fat")}
            placeholder="fat"
          />
          <input
            className="mb-1"
            type="text"
            {...register("protein")}
            placeholder="protein"
          />
          <input
            className="mb-1"
            type="text"
            {...register("sugar")}
            placeholder="sugar"
          />
          <textarea {...register("description")} />

          <div className="mt-3 ">
            <button type="submit" className="text-green-700">
              Add
            </button>
          </div>
        </form>
        <DevTool control={control} />
      </div>
      <div>
        {ingredients &&
          ingredients.data?.map((ingredient: any) => {
            return (
              <div key={ingredient.id} className="bg-slate-600 flex gap-3">
                <div>{ingredient.name}</div>
                <button
                  className="text-red-600"
                  onClick={handleDelete(ingredient.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
