import { SmallOptionMenu } from "./SmallOptionMenu";
import { CaloriesBlock } from "./CaloriesBlock";
import plus from "../assets/icons/plus.svg";
import { useState } from "react";
import IngredientsSearch from "./IngredientsSearch";
import { useDispatch } from "react-redux";
import { editRecipeFormData } from "../features/appControlSlice";
import { useMealById } from "../queryHooks/useRecipeData";
import UnitsDropdown from "./UnitsDropdown";
import Input from "./Input";
const nutrition = {
  calories: 72,
  carbs: 33,
  fat: 120,
  protein: 50,
};

export const MealDisplayItem = ({
  meal,
  openRecipeSearch = () => {},
  removeRecipe = () => {},
}: {
  meal: any;
  openRecipeSearch?: () => void;
  removeRecipe?: () => void;
}) => {
  const dispatch = useDispatch();
  const [openSearch, setOpenSearch] = useState(false);
  const { data: recipeData } = useMealById(meal.originalRecipeId);
  const recipe = recipeData?.data;

  const addIngredientToMeal = (ingredient: any) => {
    setOpenSearch(false);
    console.log("ingredient", ingredient);
  };

  const openRecipeEdit = () => {
    dispatch(editRecipeFormData(recipe));
  };

  const updateUnit = (unit: string) => {
    console.log("unit", unit);
  };
  const updateQuantity = (quantity: string) => {
    console.log("quantity", quantity);
  };

  return (
    <>
      <IngredientsSearch
        isOpen={openSearch}
        addIngredientToMeal={addIngredientToMeal}
        closeSearch={() => setOpenSearch(false)}
      />
      <div>
        {recipe?.name ? (
          <div className="flex">
            <div className="w-24 h-24 rounded-xl border border-textColor">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold mb-1">{recipe.name}</h1>
              <div className="flex gap-1">
                <Input
                  type="text"
                  value={meal.quantity}
                  onChange={(e) => updateQuantity(e.target.value)}
                />
                <UnitsDropdown
                  value={meal.unit}
                  onChange={(value) => updateUnit(value)}
                />
                <p>{meal.calories}</p>
              </div>
            </div>
            {/* <CaloriesBlock nutrition={nutrition} /> */}
            <div className="ml-4">
              <SmallOptionMenu
                options={[
                  {
                    name: "Edit",
                    action: () => {
                      openRecipeEdit();
                    },
                  },
                  {
                    name: "Delete",
                    action: () => {
                      removeRecipe();
                    },
                  },
                ]}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-between">
            <div
              className="w-24 h-24 rounded-xl border border-textColor flex justify-center items-center cursor-pointer"
              onClick={openRecipeSearch}
            >
              <img src={plus} alt="" />
            </div>
            <SmallOptionMenu
              options={[
                {
                  name: "Edit",
                  action: () => {
                    openRecipeEdit();
                  },
                },
                {
                  name: "Delete",
                  action: () => {
                    removeRecipe();
                  },
                },
              ]}
            />
          </div>
        )}
      </div>
    </>
  );
};
