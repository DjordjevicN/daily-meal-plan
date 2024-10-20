import { EmptyShoppingList } from "../components/Shopping/EmptyShoppingList";
import ShoppingListItem from "../components/Shopping/ShoppingListItem";
import Input from "../components/Input";
import { Typography } from "../components/Typography";

export const ShoppingList = () => {
  const listItems = [1, 2, 3, 4, 5, 6, 7, 8];
  return listItems.length > 0 ? (
    <div className="px-3 pt-3">
      <div className="my-4">
        <Typography.H1 color="textColor">Shopping List</Typography.H1>
      </div>
      <div className="mx-auto max-w-[500px]">
        <div className="mb-5">
          <Input placeholder="Search" />
        </div>
        {listItems.map((item) => (
          <ShoppingListItem item={item} />
        ))}
      </div>
    </div>
  ) : (
    <EmptyShoppingList />
  );
};
