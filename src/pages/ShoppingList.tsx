import React from "react";
import { EmptyShoppingList } from "../components/Shopping/EmptyShoppingList";
import ShoppingListItem from "../components/Shopping/ShoppingListItem";
import Input from "../components/Input";

export const ShoppingList = () => {
  const listItems = [1, 2, 3, 4, 5, 6, 7, 8];
  return listItems.length > 0 ? (
    <div className="px-3 pt-3">
      <div className="mx-auto max-w-[500px]">
        <Input placeholder="Search" />
        {listItems.map((item) => (
          <ShoppingListItem item={item} />
        ))}
      </div>
    </div>
  ) : (
    <EmptyShoppingList />
  );
};
