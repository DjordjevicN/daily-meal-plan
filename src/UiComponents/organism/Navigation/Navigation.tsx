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
  const logoutUser = () => {
    localStorage.clear();
  };
  return (
    <div className="navigation">
      <div className="navigation__content">
        <div className="logo">
          <Avatar />
        </div>
        {user.id === 1 && (
          <Link to="/foodTransfer">
            <ButtonShell>Food Transfer</ButtonShell>
          </Link>
        )}

        <div className="burgerWrapper">
          <div
            className="burger__content"
            onClick={() => setOpenBurger(!openBurger)}
          >
            <AiOutlineMenu className="burger" />
          </div>
          {openBurger && (
            <div className="dropdown">
              <Link to={user.id === 0 ? "/login" : "/dashboard"}>
                <ButtonShell>Dashboard</ButtonShell>
              </Link>

              <hr />
              {user.id === 0 ? (
                <Link to="/login">
                  <ButtonShell>Log In</ButtonShell>
                </Link>
              ) : (
                <ButtonShell
                  onClick={() => {
                    logoutUser();
                    window.location.href = "/";
                  }}
                >
                  Logout
                </ButtonShell>
              )}
            </div>
          )}
        </div>
        <div className="links">
          <Link to={user.id === 0 ? "/login" : "/dashboard"}>
            <ButtonShell>Dashboard </ButtonShell>
          </Link>

          <Link to="/login">
            <ButtonShell type="mono">Log in</ButtonShell>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
