import React from "react";
import plus from "../assets/icons/plus.svg";

export const NoImage = () => {
  return (
    <div className="w-24 h-24 rounded-xl border border-textColor flex justify-center items-center cursor-pointer">
      <img src={plus} alt="" />
    </div>
  );
};
