import React from "react";
import "./LoginForm.scss";
import Paper from "../../atom/paper/Paper";
import Avatar from "../../atom/avatar/Avatar";
import InputField from "../../atom/input/InputField";
import Button from "../../atom/Button/Button";

const LoginForm = () => {
  return (
    <div className="login">
      <div className="login__content">
        <Paper>
          <Avatar />
          <div className="title">Log in</div>
          <div className="subTitle">Login to manage your account</div>
          <div className="form">
            <InputField />
            <InputField />
          </div>
          <Button label="Login" />
        </Paper>
      </div>
    </div>
  );
};

export default LoginForm;
