import React from "react";
import "./SelectInput.scss";
import { GiOrangeSlice } from "react-icons/gi";

interface IProps {
  placeholder: string;
  icon?: any;
  change?: any;
  options: any;
}
const SelectInput = (props: IProps) => {
  return (
    <div className="select-wrapper">
      <div className="select-wrapper__content">
        {props.icon ?? <GiOrangeSlice />}

        <select name="activity" onChange={(e) => props.change(e.target.value)}>
          <option disabled selected>
            {props.placeholder}
          </option>
          {props.options.map((item: any) => {
            return (
              <option key={item.id} value={item.value}>
                {item.option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
