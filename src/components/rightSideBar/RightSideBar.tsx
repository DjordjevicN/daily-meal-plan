import React from "react";
import "./rightSideBar.scss";

interface IProps {
  children: JSX.Element;
  isOpen: boolean;
}

const RightSideBar: React.FC<IProps> = (props) => {
  return (
    <div
      className="rightSideBar"
      style={{ display: props.isOpen ? "grid" : "none" }}
    >
      <div className="content">{props.children}</div>
    </div>
  );
};

export default RightSideBar;
