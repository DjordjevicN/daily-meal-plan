import React from "react";
import "./Paper.scss";

const Paper = (props: any) => {
  return <div className="paper">{props.children}</div>;
};

export default Paper;
