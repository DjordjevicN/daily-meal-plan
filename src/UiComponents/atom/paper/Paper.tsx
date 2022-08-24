import React from "react";
import "./Paper.scss";

const Paper = (props: any) => {
  return (
    <div className="paper" style={props.style}>
      <div className="paper__content">{props.children}</div>
    </div>
  );
};

export default Paper;
