import { NoImage } from "../NoImage";
import Input from "../Input";
import UnitsDropdown from "../UnitsDropdown";
import Textarea from "../Textarea";
import { useEffect, useId, useState } from "react";

interface RecipeIngredientsFormProps {
  id?: string;
  image?: string;
  weight?: string;
  description?: string;
  unit?: string;
  name?: string;
  addIngredientToMeal: (ingredient: any) => void;
}

export const RecipeIngredientsForm = ({
  id,
  image,
  weight,
  description,
  unit,
  name,
  addIngredientToMeal,
}: RecipeIngredientsFormProps) => {
  const newId = useId();
  const [ingredient, setIngredient] = useState({
    id: id ?? newId,
    image: image,
    weight: weight,
    description: description,
    unit: unit,
    name: name,
  });
  console.log("ingredient", ingredient);

  useEffect(() => {
    addIngredientToMeal(ingredient);
  }, [ingredient, addIngredientToMeal]);

  return (
    <div className="flex gap-3 mt-5 bg-white90 p-4 rounded mb-3">
      <NoImage />
      <div>
        <p className="mb-3 text-dark text-xl font-semibold">
          {ingredient.name}
        </p>
        <div className="flex items-center gap-3">
          <Input
            type="text"
            placeholder="Weight"
            value={ingredient.weight}
            onChange={(e) =>
              setIngredient({ ...ingredient, weight: e.target.value })
            }
          />
          <UnitsDropdown
            value={ingredient.unit}
            onChange={(newUnit) =>
              setIngredient({ ...ingredient, unit: newUnit })
            }
          />
        </div>
        <Textarea
          placeholder="Additional Description"
          onChange={(e) =>
            setIngredient({ ...ingredient, description: e.target.value })
          }
        />
      </div>
    </div>
  );
};
