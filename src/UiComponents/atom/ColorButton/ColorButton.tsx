import React from "react";
import "./ColorButton.scss";
interface IProps {
  label: string;
}

const ColorButton = (props: IProps) => {
  return (
    <div className="colorButton">
      <button>{props.label}</button>
    </div>
  );
};

export default ColorButton;
