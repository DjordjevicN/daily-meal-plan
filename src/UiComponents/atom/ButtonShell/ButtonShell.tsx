import React from "react";
import "./ButtonShell.scss";
interface IProps {
  children?: any;
  type?: string;
  icon?: any;
  customStyle?: any;
  onClick?: () => void;
}

const ButtonShell = (props: IProps) => {
  return (
    <div
      onClick={() =>
        props.onClick
          ? props.onClick()
          : console.warn("You forgot to put action on button")
      }
      id="ButtonShell"
      className={props.type ?? "default"}
      style={props.customStyle}
    >
      {props.icon && props.icon}
      {props.children}
    </div>
  );
};

export default ButtonShell;
