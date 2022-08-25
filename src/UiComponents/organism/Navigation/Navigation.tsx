import React, { useState } from "react";
import Avatar from "../../atom/avatar/Avatar";
import "./Navigation.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import ButtonShell from "../../atom/ButtonShell/ButtonShell";
import { useSelector } from "react-redux";
import { State } from "../../../state";

const Navigation = () => {
  const user = useSelector((state: State) => state.user);
  const [openBurger, setOpenBurger] = useState(false);
  return (
    <div className="navigation">
      <div className="navigation__content">
        <div className="logo">
          <Avatar />
        </div>
        <div className="burgerWrapper">
          <div
            className="burger__content"
            onClick={() => setOpenBurger(!openBurger)}
          >
            <AiOutlineMenu className="burger" />
          </div>
          {openBurger && (
            <div className="dropdown">
              <ButtonShell>
                <Link to={user.id === 0 ? "/login" : "/dashboard"}>
                  Dashboard
                </Link>
              </ButtonShell>
              <hr />
              <ButtonShell>
                <Link to="/login">Log In</Link>
              </ButtonShell>
            </div>
          )}
        </div>
        <div className="links">
          <ButtonShell>
            <Link to={user.id === 0 ? "/login" : "/dashboard"}>Dashboard</Link>
          </ButtonShell>

          <ButtonShell type="mono">
            <Link to="/login">Log In</Link>
          </ButtonShell>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
