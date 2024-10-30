import { useEffect, useState } from "react";
import { useIngredientByName } from "../queryHooks/useIngredientData";
import Input from "./Input";

interface IngredientsSearchProps {
  addIngredientToMeal: (id: string, e: React.MouseEvent) => void;
}

const IngredientsSearch: React.FC<IngredientsSearchProps> = ({
  addIngredientToMeal,
}) => {
  const [search, setSearch] = useState("");
  const { data: ingredientData } = useIngredientByName(search);

  const ingredient = ingredientData?.data;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="absolute top-0 left-0 z-10 h-full bg-white w-full">
      <Input
        label="Search ingredients..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search ingredients..."
      />
      {ingredient &&
        ingredient.map((item: any) => (
          <div
            key={item.id}
            className="flex w-full border-t pt-1 pr-2 border-fgCard"
          >
            <div>
              <img
                src={item.image}
                alt=""
                className="w-20 h-20 rounded-lg border border-textColor"
              />
            </div>
            <div className="ml-4">
              <p className="text-brand ">{item.name}</p>
            </div>
            <button
              className="ml-auto"
              onClick={(e) => addIngredientToMeal(item.id, e)}
            >
              Add
            </button>
          </div>
        ))}
    </div>
  );
};

export default IngredientsSearch;
