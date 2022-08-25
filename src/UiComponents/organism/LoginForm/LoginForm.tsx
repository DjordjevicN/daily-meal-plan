import React from "react";
import "./LoginForm.scss";
import Paper from "../../atom/paper/Paper";
import Avatar from "../../atom/avatar/Avatar";
import InputField from "../../atom/input/InputField";
import Button from "../../atom/Button/Button";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm = () => {
  return (
    <div className="login">
      <div className="login__content">
        <Paper>
          <Avatar size="100px" />
          <div className="title">Log in</div>
          <div className="subTitle">Login to manage your account</div>
          <div className="form">
            <InputField placeholder="Email" icon={<AiOutlineMail />} />
            <InputField
              type="password"
              placeholder="password"
              icon={<RiLockPasswordLine />}
            />
          </div>
          <Button label="Login" type="monoButton" />
        </Paper>
      </div>
    </div>
  );
};

export default LoginForm;
