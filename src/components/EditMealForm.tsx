import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Header } from "./Elements/Header";
import Textarea from "./Textarea";
import ImageUploader from "./ImageUploader";
import Input from "./Input";

import UnitsDropdownProps from "./UnitsDropdownProps";
import Button from "./Button";
import { editMealFormData } from "../features/appControlSlice";
import { useState } from "react";
import plus from "../assets/icons/plus.svg";
import IngredientsSearch from "./IngredientsSearch";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { NoImage } from "./NoImage";

export const EditMealForm = () => {
  const { mealFormData } = useSelector((state: RootState) => state.appControl);
  const dispatch = useDispatch();
  const [image, setImage] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([
    { id: "asd", description: "Step 1" },
    { id: "asdd", description: "Step 2" },
  ]);
  const [openSearch, setOpenSearch] = useState(false);
  const { watch, setValue, handleSubmit, control, register } = useForm();

  console.log(watch());

  const handleClose = () => {
    dispatch(editMealFormData(null));
  };

  const handleSave = (data: any) => {
    console.log("data", data);

    const newRecipe = {
      ...data,
      steps,
      image: image,
      ingredients,
    };
    console.log("save", newRecipe);
  };

  const openMealSearch = () => {
    setOpenSearch(true);
  };

  const newStep = () => {
    const newId = Math.random().toString(36).substring(7);
    setSteps([...steps, { id: newId, description: "New step" }]);
  };

  const removeStep = (id: string) => {
    setSteps(steps.filter((step) => step.id !== id));
  };

  const addRecipeToList = (id: string, e: React.MouseEvent) => {
    console.log("add recipe to list", id, e);
  };

  return (
    <>
      {openSearch && (
        <IngredientsSearch addIngredientToMeal={addRecipeToList} />
      )}
      {mealFormData && (
        <div className="min-h-[100vh] bg-white absolute top-0 w-full p-4 pb-[200px]">
          <Header title="Customize" />

          <form onSubmit={handleSubmit(handleSave)}>
            <div className="max-w-[500px] mx-auto mt-5">
              <ImageUploader onImageUpload={() => setImage(image)} />
              <Input
                type="text"
                placeholder="Name"
                {...(register("name"), { required: true })}
                onChange={(e) => {
                  setValue("name", e.target.value);
                }}
              />
              <Textarea
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
                    <input type="checkbox" {...register("breakfast")} />
                    <p>Breakfast</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="checkbox" {...register("snack")} />
                    <p>Snack</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="checkbox" {...register("lunch")} />
                    <p>Lunch</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="checkbox" {...register("dinner")} />
                    <p>Dinner</p>
                  </div>
                </div>
              </div>
              <p className="text-dark text-xl my-5">Recipe preparation</p>
              <div className="flex justify-between items-center mb-0">
                <p>Prep time</p>
                <div className="flex items-center gap-2">
                  <Input
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
              {/* create new component for this */}
              <div className="flex gap-3 mt-5 bg-white90 p-4 rounded mb-3">
                <NoImage />
                <div>
                  <p className="mb-3 text-dark text-xl font-semibold">
                    Ingredient Name
                  </p>
                  <div className="flex items-center gap-3">
                    <Input type="text" placeholder="Weight" />
                    <UnitsDropdownProps
                      value="g"
                      onChange={() => console.log("changed")}
                    />
                  </div>
                  <Textarea placeholder="Additional Description" />
                </div>
              </div>
              <Button
                type="button"
                color="secondary"
                className="flex gap-1 items-center"
                onClick={openMealSearch}
              >
                <img src={plus} alt="add" />
                <p> Add ingredient</p>
              </Button>
              <div>
                {steps.map((step) => (
                  <>
                    <div className="flex justify-end items-center mb-5">
                      <Button
                        type="button"
                        color="text"
                        className="h-2"
                        onClick={() => removeStep(step.id)}
                      >
                        <p> Remove Step</p>
                      </Button>
                    </div>
                    <div key={step.id}>
                      <Textarea
                        className="w-full"
                        value={step.description}
                        placeholder="Step Description"
                        onChange={(e) => {
                          setSteps(
                            steps.map((s) =>
                              s.id === step.id
                                ? { ...s, description: e.target.value }
                                : s
                            )
                          );
                        }}
                      />
                    </div>
                  </>
                ))}
              </div>
              <Button
                type="button"
                color="secondary"
                className="flex items-center gap-1"
                onClick={newStep}
              >
                <img src={plus} alt="" />
                <p>Add Step</p>
              </Button>
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
