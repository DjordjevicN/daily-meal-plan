import React, { useEffect, useState } from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginUserModal from "../../components/modals/loginUserModal/LoginUserModal";
import CreateUserModal from "../modals/createUserModal/CreateUserModal";
import { State } from "../../state";
import RightSideBar from "../../components/rightSideBar/RightSideBar";

function Menu() {
  const [local, setLocal] = useState(true);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openCreateAccModal, setOpenCreateAccModal] = useState(false);
  const isUserLoggedIn = () => {
    return user.id !== 0;
  };
  useEffect(() => {
    if (window.location.hostname === "localhost") {
      setLocal(true);
    } else {
      setLocal(false);
    }
  }, [local]);

  const user = useSelector((state: State) => state.user);

  const handleSwitchToCreateAcc = () => {
    setOpenLoginModal(false);
    setOpenCreateAccModal(true);
  };
  const handleRedirect = () => {
    return (window.location.href = "/");
  };
  return (
    <>
      <RightSideBar isOpen={openLoginModal}>
        <LoginUserModal
          setOpenLoginModal={setOpenLoginModal}
          handleSwitchToCreateAcc={handleSwitchToCreateAcc}
        />
      </RightSideBar>
      <RightSideBar isOpen={openCreateAccModal}>
        <CreateUserModal setOpenCreateUserModal={setOpenCreateAccModal} />
      </RightSideBar>
      <div className="mainNavMenu">
        <div className="content">
          <div className="logo" onClick={() => handleRedirect()}>
            <img src="images/LOGO-MAIN.png" alt="Logo" />
            <p>Meal Plan</p>
          </div>
          {window.location.hostname === "localhost" ? (
            <div className="navigation">
              <a className="link-item link" href="/">
                Home
              </a>
              {isUserLoggedIn() && (
                <a className="link-item link" href="/dashboard">
                  Dashboard
                </a>
              )}
              <a className="link-item link" href="/dashboard">
                Dashboard
              </a>
              {!isUserLoggedIn() && (
                <button
                  className="link-item button"
                  onClick={() => setOpenCreateAccModal(true)}
                >
                  Sign Up
                </button>
              )}
              {!isUserLoggedIn() && (
                <button
                  className="link-item button"
                  onClick={() => setOpenLoginModal(true)}
                >
                  Login
                </button>
              )}
            </div>
          ) : (
            <div className="navigation">
              <Link className="link-item link" to="/">
                Home
              </Link>
              {isUserLoggedIn() && (
                <Link className="link-item" to="/dashboard">
                  Dashboard
                </Link>
              )}
              <Link className="link-item" to="/dashboard">
                Dashboard
              </Link>
              {!isUserLoggedIn() && (
                <button
                  className="link-item button"
                  onClick={() => setOpenCreateAccModal(true)}
                >
                  Sign Up
                </button>
              )}
              {!isUserLoggedIn() && (
                <button
                  className="link-item button"
                  onClick={() => setOpenLoginModal(true)}
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Menu;
