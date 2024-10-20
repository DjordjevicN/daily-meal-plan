import { useForm } from "react-hook-form";
import {
  useAddIngredient,
  useDeleteIngredient,
  useIngredientData,
} from "../queryHooks/useIngredientData";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { useState } from "react";

export const IngredientsForm = () => {
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const { data: ingredients } = useIngredientData();
  const { mutate: deleteIngredient } = useDeleteIngredient();
  const { mutate: addIngredient } = useAddIngredient();
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const handleDelete = (id: string) => async () => {
    deleteIngredient(id);
  };

  const handleAddIngredient = (data: any) => {
    const newIngredient = {
      image: preview,
      name: data.name.toLowerCase(),
      unit: data.unit,
      nutrients: {
        calories: data.calories,
        carbs: data.carbs,
        fat: data.fat,
        protein: data.protein,
        sugar: data.sugar,
      },
      description: data.description,
    };

    addIngredient(newIngredient);
    reset();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(undefined);
    }
  };
  return (
    <div className="max-w-[500px] mx-auto mb-[100px] mt-5">
      <img
        src="/images/LOGO-MAIN.png"
        alt="logo"
        className="w-52 mx-auto mb-5"
      />
      <p className="mb-6 text-brand text-center">CREATE INGREDIENT</p>
      {preview && (
        <div>
          <img
            src={preview}
            alt="Preview"
            className="w-20 h-20 mb-4 rounded-lg border border-textColor"
          />
        </div>
      )}
      <div>
        <form
          onSubmit={handleSubmit(handleAddIngredient)}
          className="flex flex-col"
        >
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="mb-4"
          />
          <Input
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
            type="text"
            placeholder="Name"
            onChange={async ({ target }) => {
              setValue("name", (target as HTMLInputElement).value);
            }}
          />
          <Input
            {...register("calories")}
            type="text"
            placeholder="Calories"
            onChange={async ({ target }) => {
              setValue("calories", (target as HTMLInputElement).value);
            }}
          />
          <Input
            {...register("carbs")}
            type="text"
            placeholder="Carbs"
            onChange={async ({ target }) => {
              setValue("carbs", (target as HTMLInputElement).value);
            }}
          />
          <Input
            {...register("fat")}
            type="text"
            placeholder="Fat"
            onChange={async ({ target }) => {
              setValue("fat", (target as HTMLInputElement).value);
            }}
          />
          <Input
            {...register("protein")}
            type="text"
            placeholder="Protein"
            onChange={async ({ target }) => {
              setValue("protein", (target as HTMLInputElement).value);
            }}
          />
          <Input
            {...register("sugar")}
            type="text"
            placeholder="Sugar"
            onChange={async ({ target }) => {
              setValue("sugar", (target as HTMLInputElement).value);
            }}
          />
          <Textarea
            {...register("description")}
            placeholder="Description"
            onChange={({ target }) => setValue("description", target.value)}
          />

          <div className="mt-3 ">
            <button
              className="mt-1 bg-brand text-white p-2 w-full rounded-lg"
              type="submit"
            >
              Create ingredient
            </button>
          </div>
        </form>
      </div>
      <div>
        {ingredients &&
          ingredients.data?.map((ingredient: any) => {
            return (
              <div key={ingredient.id} className="bg-slate-600 flex gap-3">
                <div>{ingredient.name}</div>
                <img
                  src={ingredient.image}
                  alt=""
                  className="w-20 h-20 mb-4 rounded-lg border border-textColor"
                />
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
