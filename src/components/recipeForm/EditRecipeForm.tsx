import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { RootState } from "../../app/store";
import { editRecipeFormData } from "../../features/appControlSlice";

import { Header } from "../Elements/Header";
import ImageUploader from "../ImageUploader";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import { useAddRecipe } from "../../queryHooks/useRecipeData";

export const EditRecipeForm = () => {
  const { mealFormData } = useSelector((state: RootState) => state.appControl);
  const dispatch = useDispatch();

  const { mutate: addRecipe } = useAddRecipe();
  const { watch, setValue, handleSubmit, control, register } = useForm();

  const handleClose = () => {
    dispatch(editRecipeFormData(null));
  };

  const handleSave = (data: any) => {
    addRecipe(data);
  };

  useEffect(() => {
    const addInitialValues = () => {
      setValue("name", mealFormData.name);
      setValue("description", mealFormData.description);
      setValue("breakfast", mealFormData.worksWellFor.includes("Breakfast"));
      setValue("snack", mealFormData.worksWellFor.includes("Snack"));
      setValue("lunch", mealFormData.worksWellFor.includes("Lunch"));
      setValue("dinner", mealFormData.worksWellFor.includes("Dinner"));
      setValue("prepTime", mealFormData.prepTime);
      setValue("yields", mealFormData.yields);
      setValue("image", mealFormData.image);
    };
    if (mealFormData) {
      addInitialValues();
    }
  }, [mealFormData, setValue]);

  return (
    <>
      {mealFormData && (
        <div className="min-h-[100vh] bg-white absolute top-0 w-full p-4 pb-[200px]">
          <Header title="Customize" />
          <form onSubmit={handleSubmit(handleSave)}>
            <div className="max-w-[500px] mx-auto mt-5">
              <ImageUploader
                onImageUpload={(img) => setValue("image", img)}
                initialImageUrl={mealFormData.image}
              />
              <Input
                value={watch("name")}
                type="text"
                placeholder="Name"
                {...(register("name"), { required: true })}
                onChange={(e) => {
                  setValue("name", e.target.value);
                }}
              />
              <Textarea
                value={watch("description")}
                placeholder="Description"
                {...register("description")}
                onChange={(e) => {
                  setValue("description", e.target.value);
                }}
              />
              <div className="flex justify-between">
                <p>Works well for:</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      {...register("breakfast")}
                      value={watch("breakfast")}
                    />
                    <p>Breakfast</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      {...register("snack")}
                      value={watch("snack")}
                    />
                    <p>Snack</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      {...register("lunch")}
                      value={watch("lunch")}
                    />
                    <p>Lunch</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      {...register("dinner")}
                      value={watch("dinner")}
                    />
                    <p>Dinner</p>
                  </div>
                </div>
              </div>
              <p className="text-dark text-xl my-5">Recipe preparation</p>
              <div className="flex justify-between items-center mb-0">
                <p>Prep time</p>
                <div className="flex items-center gap-2">
                  <Input
                    value={watch("prepTime")}
                    type="text"
                    placeholder="5"
                    className="w-24 !mb-0"
                    {...register("prepTime")}
                    onChange={(e) => {
                      setValue("prepTime", e.target.value);
                    }}
                  />
                  <p>Minutes</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-0">
                <p>Yields</p>
                <div className="flex items-center gap-2 mt-3">
                  <Input
                    value={watch("yields")}
                    type="text"
                    placeholder="5"
                    className="w-24 !mb-0"
                    {...register("yields")}
                    onChange={(e) => {
                      setValue("yields", e.target.value);
                    }}
                  />
                  <p>Serving</p>
                </div>
              </div>

              <div className="flex gap-2 mt-8">
                <Button type="button" color="cancel" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" color="primary" onClick={handleSave}>
                  Save
                </Button>
              </div>
            </div>
          </form>
          <DevTool control={control} />
        </div>
      )}
    </>
  );
};
