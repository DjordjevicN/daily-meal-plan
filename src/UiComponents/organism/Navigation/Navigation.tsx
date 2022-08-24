import React from "react";
import Avatar from "../../atom/avatar/Avatar";
import "./Navigation.scss";

import Button from "../../atom/Button/Button";
import { AiOutlineMenu } from "react-icons/ai";
import LoginUserModal from "../../../components/modals/loginUserModal/LoginUserModal";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__content">
        <div className="logo">
          <Avatar />
        </div>
        <div>
          <AiOutlineMenu className="burger" />
        </div>
        <div className="links">
          <Button
            label="Dashboard"
            onClick={() => (window.location.href = "/dashboard")}
          />
          <Button label="Login" type="monoButton" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
