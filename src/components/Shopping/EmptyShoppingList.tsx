import React from "react";
import { Typography } from "../Typography";

interface EmptyShoppingListProps {}

export const EmptyShoppingList: React.FC<EmptyShoppingListProps> = () => {
  const handleGenerate = () => {
    console.log("Generate shopping list");
  };
  return (
    <div className="bg-bgCard max-w-[500px] mx-auto flex justify-center items-center min-h-[100vh]">
      <div className="text-center">
        <Typography.H1 color="textColor" className="font-bold !mb-6">
          Generate shopping list
        </Typography.H1>
        <Typography.H2 color="paragraph" className="!mb-6">
          Shopping list will be generated <br />
          based on your meal plan
        </Typography.H2>
        <button
          className="mt-1 bg-brand text-white p-2 w-full rounded-lg"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
    </div>
  );
};
