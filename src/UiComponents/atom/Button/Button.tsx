import React from "react";
import "./Button.scss";

interface IButton {
  label?: string;
  type?: string;
  onClick?: () => void;
}

const Button = (props: IButton) => {
  return (
    <button
      onClick={() =>
        props.onClick
          ? props.onClick()
          : console.warn("You forgot to put action on button")
      }
      className={props.type ?? "default"}
    >
      {props.label ?? "Button"}
    </button>
  );
};

export default Button;
