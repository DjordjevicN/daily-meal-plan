import React from "react";
import { IData } from "../../Types";
type Props = {
  item: IData;
};
const Meal: React.FC<Props> = ({ item }) => {
  console.log(item);

  return <div>Meal</div>;
};

export default Meal;
