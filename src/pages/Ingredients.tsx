import {
  useDeleteIngredient,
  useIngredientData,
} from "../queryHooks/useIngredientData";

export const Ingredients = () => {
  const { data: ingredients } = useIngredientData();
  const { mutate: deleteIngredient } = useDeleteIngredient();

  const handleDelete = (id: string) => async () => {
    console.log("delete", id);
    deleteIngredient(id);
  };

  return (
    <div>
      <div>Add Ingredient</div>
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
