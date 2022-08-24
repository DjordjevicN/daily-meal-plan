import React from "react";
import "./ButtonShell.scss";
interface IProps {
  children: any;
  type?: string;
}

const ButtonShell = (props: IProps) => {
  return <div className={props.type ?? "default"}>{props.children}</div>;
};

export default ButtonShell;
