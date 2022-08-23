import React from "react";
import "./Button.scss";

interface IButton {
  label: string;
}

const Button = (props: IButton) => {
  return <button className="customButton">{props.label}</button>;
};

export default Button;
