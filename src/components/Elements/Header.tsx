import React, { FC, ReactElement } from "react";
import { Options as SmallOptionMenuOptions } from "../SmallOptionMenu";
import { SmallOptionMenu } from "../SmallOptionMenu";
interface IHeader {
  title: ReactElement | string;
  options?: SmallOptionMenuOptions[];
}
export const Header: FC<IHeader> = ({ title, options }) => {
  return (
    <div className="max-w-[500px] mx-auto">
      {title && <h1 className="font-bold text-salt text-2xl">{title}</h1>}
      {options && <SmallOptionMenu options={options} />}
    </div>
  );
};
