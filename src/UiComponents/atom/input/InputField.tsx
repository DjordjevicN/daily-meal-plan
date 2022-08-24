import React from "react";
import "./inputField.scss";
import { AiOutlineMail } from "react-icons/ai";

interface IProps {
  placeholder?: string;
  type?: string;
  icon?: any;
}

const InputField = (props: IProps) => {
  return (
    <div className="input">
      <div className="input__content">
        {props.icon ?? <AiOutlineMail />}

        <input
          type={props.type ?? "text"}
          placeholder={props.placeholder ?? "User name"}
        />
      </div>
    </div>
  );
};

export default InputField;
