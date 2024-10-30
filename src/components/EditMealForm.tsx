import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Header } from "./Elements/Header";
import Textarea from "./Textarea";
import ImageUploader from "./ImageUploader";
import Input from "./Input";
import { CheckBox } from "./CheckBox";
import UnitsDropdownProps from "./UnitsDropdownProps";
import Button from "./Button";
import { editMealFormData } from "../features/appControlSlice";
import { useState } from "react";
import plus from "../assets/icons/plus.svg";
import IngredientsSearch from "./IngredientsSearch";
export const EditMealForm = () => {
  const { mealFormData } = useSelector((state: RootState) => state.appControl);
  const dispatch = useDispatch();
  const setPreview = (image: string | undefined) => {};
  const [steps, setSteps] = useState([
    { id: "asd", description: "Step 1" },
    { id: "asdd", description: "Step 2" },
  ]);
  const [openSearch, setOpenSearch] = useState(false);

  const handleClose = () => {
    dispatch(editMealFormData(null));
  };

  const handleSave = () => {
    console.log("save");
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

  const handleDescriptionChange = (e: any, id: string) => {
    console.log(e.target.value);
    setSteps(
      steps.map((step) => {
        if (step.id === id) {
          return { ...step, description: e.target.value };
        }
        return step;
      })
    );
  };
  const addRecipeToList = (id: string, e: React.MouseEvent) => {
    console.log("add recipe to list", id, e);
  };
  console.log(openSearch);

  return (
    <>
      {openSearch && (
        <IngredientsSearch addIngredientToMeal={addRecipeToList} />
      )}
      {mealFormData && (
        <div className="min-h-[100vh] bg-white absolute top-0 w-full p-4 pb-[200px]">
          <Header title="Customize" />
          <div className="max-w-[500px] mx-auto mt-5">
            <ImageUploader onImageUpload={setPreview} />
            <Input type="text" placeholder="Name" />
            <Textarea placeholder="Description" />
            <div className="flex justify-between">
              <p>Works well for:</p>
              <div className="flex flex-wrap gap-4">
                <CheckBox value={false} className="ml-auto" label="Breakfast" />
                <CheckBox value={false} className="ml-auto" label="Lunch" />
                <CheckBox value={false} className="ml-auto" label="Snack" />
                <CheckBox value={false} className="ml-auto" label="Dinner" />
              </div>
            </div>
            <p className="text-dark text-xl my-5">Recipe preparation</p>
            <div className="flex justify-between items-center mb-0">
              <p>Prep time</p>
              <div className="flex items-center gap-2">
                <Input type="text" placeholder="5" className="w-24 !mb-0" />
                <p>Minutes</p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-0">
              <p>Yields</p>
              <div className="flex items-center gap-2 mt-3">
                <Input type="text" placeholder="5" className="w-24 !mb-0" />
                <p>Serving</p>
              </div>
            </div>

            <div className="flex gap-3 mt-5 bg-white90 p-4 rounded mb-3">
              <ImageUploader onImageUpload={setPreview} />
              <div>
                <p className="mb-3 text-dark text-xl font-semibold">
                  Ingredient Name
                </p>
                <div className="flex items-center gap-3">
                  <Input type="text" placeholder="Weight" className="" />
                  <UnitsDropdownProps
                    value="g"
                    onChange={() => console.log("changed")}
                  />
                </div>
                <Textarea placeholder="Additional Description" />
              </div>
            </div>
            <Button
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
                      onChange={(e) => handleDescriptionChange(e, step.id)}
                    />
                  </div>
                </>
              ))}
            </div>
            <Button
              color="secondary"
              className="flex items-center gap-1"
              onClick={newStep}
            >
              <img src={plus} alt="" />
              <p>Ad Step</p>
            </Button>
            <div className="flex gap-2 mt-8">
              <Button color="cancel" onClick={handleClose}>
                Cancel
              </Button>
              <Button color="primary" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
