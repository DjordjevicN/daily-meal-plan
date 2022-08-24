import React from "react";
import "./Avatar.scss";

interface IProps {
  size?: string;
  image?: string;
}

const Avatar = (props: IProps) => {
  return (
    <div className="avatar-wrapper">
      <img
        style={{ width: props.size, height: props.size }}
        className="avatar"
        src={props.image ? props.image : "images/logo-512.png"}
        alt=""
      />
    </div>
  );
};

export default Avatar;
