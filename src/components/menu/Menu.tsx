import React, { useEffect, useState } from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginUserModal from "../../components/modals/loginUserModal/LoginUserModal";
import CreateUserModal from "../modals/createUserModal/CreateUserModal";
import { State } from "../../state";

function Menu() {
  const [local, setLocal] = useState(true);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openCreateAccModal, setOpenCreateAccModal] = useState(false);

  useEffect(() => {
    if (window.location.hostname === "localhost") {
      setLocal(true);
    } else {
      setLocal(false);
    }
  }, [local]);
  const user = useSelector((state: State) => state.user);

  const isUserLoggedIn = () => {
    return user.id !== 0;
  };
  const handleSwitchToCreateAcc = () => {
    setOpenLoginModal(false);
    setOpenCreateAccModal(true);
  };

  return (
    <>
      <div className="navMenu">
        <div className="content">
          <div className="logo">
            <p>MDM</p>
          </div>
          {window.location.hostname === "localhost" ? (
            <div className="navigation">
              <a className="link-item" href="/">
                Home
              </a>
              <a className="link-item" href="/shopping">
                Shopping
              </a>
              <a className="link-item" href="/plan">
                Plan
              </a>
              {isUserLoggedIn() ? (
                <a className="link-item" href="/profile">
                  Profile
                </a>
              ) : (
                <p
                  className="link-item"
                  onClick={() => setOpenLoginModal(true)}
                >
                  Login
                </p>
              )}
            </div>
          ) : (
            <div className="navigation">
              <Link className="link-item" to="/">
                Home
              </Link>
              <Link className="link-item" to="/shopping">
                Shopping
              </Link>
              {isUserLoggedIn() ? (
                <a className="link-item" href="/profile">
                  Profile
                </a>
              ) : (
                <Link className="link-item" to="/login">
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      {openLoginModal && (
        <LoginUserModal
          setOpenLoginModal={setOpenLoginModal}
          handleSwitchToCreateAcc={handleSwitchToCreateAcc}
        />
      )}
      {openCreateAccModal && (
        <CreateUserModal setOpenCreateUserModal={setOpenCreateAccModal} />
      )}
    </>
  );
}

export default Menu;
