import React from "react";
import "./inputField.scss";
import { AiOutlineMail } from "react-icons/ai";

const InputField = () => {
  return (
    <div className="input">
      <div className="input__content">
        <AiOutlineMail className="icon" />
        <input type="text" placeholder="User name" />
      </div>
    </div>
  );
};

export default InputField;
