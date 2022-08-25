import React from "react";
import "./ButtonShell.scss";
interface IProps {
  children?: any;
  type?: string;
  icon?: any;
  customStyle?: any;
}

const ButtonShell = (props: IProps) => {
  return (
    <div
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
