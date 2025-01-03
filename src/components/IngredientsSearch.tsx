import { useEffect, useState } from "react";
import {
  useIngredientByName,
  useIngredientData,
} from "../queryHooks/useIngredientData";
import Input from "./Input";

interface IngredientsSearchProps {
  addIngredientToMeal: (ingredient: any) => void;
  closeSearch: (value: boolean) => void;
  isOpen: boolean;
}

const IngredientsSearch: React.FC<IngredientsSearchProps> = ({
  addIngredientToMeal,
  closeSearch,
  isOpen,
}) => {
  const [search, setSearch] = useState("");
  const { data: ingredientData } = useIngredientByName(search);
  const { data: allIngredients } = useIngredientData();

  const ingredient: any[] = [
    ...(ingredientData?.data || []),
    ...(allIngredients?.data || []),
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="absolute top-0 left-0 z-10 h-full bg-white w-full">
          <button onClick={() => closeSearch(false)}>xxxx</button>
          <div className="max-w-[500px] mx-auto">
            <Input
              label="Search ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search ingredients..."
            />
            {ingredient.length > 0 &&
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
                    onClick={() => addIngredientToMeal(item)}
                  >
                    Add
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default IngredientsSearch;
