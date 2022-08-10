import React, { useState } from "react";
import "./LoginUserModal.scss";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../state";
import { bindActionCreators } from "redux";
import { GrClose } from "react-icons/gr";

interface IProps {
  setOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleSwitchToCreateAcc: () => void;
}

const LoginUserModal: React.FC<IProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loginUser } = bindActionCreators(actionCreators, dispatch);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const value = { email, password };
    loginUser(value);
    window.location.href = "/dashboard";
  };

  return (
    <div className="loginModal">
      <div className="content">
        <div className="exitBtn">
          <GrClose onClick={() => props.setOpenLoginModal(false)} />
        </div>
        <div className="form">
          <h2 className="modalTitle">Login</h2>
          <div className="line" />
          <form onSubmit={handleLogin}>
            <div className="inputBlock">
              <p className="inputLabel">Email</p>
              <div className="inputEl">
                <input
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputBlock">
              <p className="inputLabel">Password</p>
              <div className="inputEl">
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Login" />
            </div>
          </form>
          <div
            className="dontHaveAcc"
            onClick={() => props.handleSwitchToCreateAcc()}
          >
            <p>Create new account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUserModal;
