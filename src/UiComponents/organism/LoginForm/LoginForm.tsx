import React, { useState, useEffect } from "react";
import "./LoginForm.scss";
import Paper from "../../atom/paper/Paper";
import Avatar from "../../atom/avatar/Avatar";
import InputField from "../../atom/input/InputField";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import ButtonShell from "../../atom/ButtonShell/ButtonShell";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../state";
import { bindActionCreators } from "redux";
import InputButton from "../../atom/InputButton/InputButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { loginUser } = bindActionCreators(actionCreators, dispatch);
  const user = useSelector((state: State) => state.user);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const value = { email, password };
    loginUser(value);
  };
  useEffect(() => {
    if (user.id !== 0) {
      return navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="login">
      <div className="goBack">
        <Link to="/">
          <ButtonShell icon={<BiArrowBack />} type="mono">
            Go Back
          </ButtonShell>
        </Link>
      </div>
      <div className="login__content">
        <Paper>
          <Avatar size="100px" />
          <div className="title">Log in</div>
          <div className="subTitle">Login to manage your account</div>
          <div className="form">
            <form onSubmit={handleLogin}>
              <InputField
                placeholder="Email"
                icon={<AiOutlineMail />}
                change={(inputValue: string) => setEmail(inputValue)}
              />
              <InputField
                type="password"
                placeholder="password"
                icon={<RiLockPasswordLine />}
                change={(inputValue: string) => setPassword(inputValue)}
              />
              <InputButton>
                <input type="submit" value="Login" />
              </InputButton>
            </form>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default LoginForm;
