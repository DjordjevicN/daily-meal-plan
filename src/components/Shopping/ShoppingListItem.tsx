import React from "react";
import { Typography } from "../Typography";
import weightIcon from "../../assets/icons/weight.svg";
import { CheckBox } from "../CheckBox";

interface ShoppingListItemProps {
  item: any;
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({ item }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className={`mb-3 flex items-center ${checked && "opacity-[0.2]"}`}>
      <div className="w-14 h-14 rounded-lg border border-paragraph mr-3">
        <img src="" alt="" className="" />
      </div>
      <div>
        <Typography.H1 color="brand">Easy Hard-Boiled Eggs</Typography.H1>
        <div className="flex gap-2">
          <img src={weightIcon} alt="" />
          <Typography.P color="textColor">100g</Typography.P>
        </div>
      </div>
      <CheckBox
        className="ml-auto"
        onChange={(value: boolean) => setChecked(value)}
      />
    </div>
  );
};

export default ShoppingListItem;
