import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Textarea from "./Textarea";

import { useAddRecipe } from "../queryHooks/useRecipeData";

const MealForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [ingredients, setIngredients] = useState<any[]>([]);
  const { mutate: addRecipe } = useAddRecipe();

  const handleAddMeal = (data: any) => {
    const newRecipe = {
      image: preview,
      name: data.name,
      description: data.description,
      ingredients: ingredients,
    };
    addRecipe(newRecipe);
    console.log(newRecipe);
  };

  const addIngredientToMeal = (id: any, e: React.MouseEvent) => {
    e.preventDefault();
    setIngredients((prev) => [...prev, id]);
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
      <p className="mb-6 text-brand text-center">CREATE MEAL</p>
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
        <form onSubmit={handleSubmit(handleAddMeal)} className="flex flex-col">
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
          <Textarea
            {...register("description")}
            placeholder="Description"
            onChange={({ target }) => setValue("description", target.value)}
          />
          {/* <IngredientsSearch
          isOpen={openSearch}
            addIngredientToMeal={addIngredientToMeal}
            closeSearch={() => console.log("close")}
          /> */}

          <div className="mt-3 ">
            <button
              className="mt-1 bg-brand text-white p-2 w-full rounded-lg"
              type="submit"
            >
              Create Meal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MealForm;
