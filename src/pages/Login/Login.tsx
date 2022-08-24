import React from "react";
import LoginForm from "../../UiComponents/organism/LoginForm/LoginForm";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__content">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
