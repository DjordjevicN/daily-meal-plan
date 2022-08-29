import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Avatar from "../../UiComponents/atom/avatar/Avatar";
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell";
import Paper from "../../UiComponents/atom/paper/Paper";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import { bindActionCreators } from "redux";
import "./SignIn.scss";
import InputField from "../../UiComponents/atom/input/InputField";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import InputButton from "../../UiComponents/atom/InputButton/InputButton";
import { IUser } from "../../constants/types";
import { userProfileInitState } from "../../constants/initStates";

const SignIn = () => {
  const dispatch = useDispatch();
  const [profileState, setProfileState] = useState<IUser>(userProfileInitState);
  const { createUser } = bindActionCreators(actionCreators, dispatch);

  const handleCreateAccount = (event: React.FormEvent) => {
    event.preventDefault();
    createUser(profileState!);
  };

  return (
    <div className="signin">
      <div className="goBack">
        <Link to="/">
          <ButtonShell icon={<BiArrowBack />} type="mono">
            Go Back
          </ButtonShell>
        </Link>
      </div>
      <div className="signin__content">
        <Paper>
          <Avatar size="100px" />
          <div className="title">Create Account</div>
          <div className="subTitle">
            Create account and unlock your dashboard
          </div>
          <div className="form">
            <form onSubmit={handleCreateAccount}>
              <InputField
                placeholder="Email"
                icon={<AiOutlineMail />}
                change={(inputValue: string) =>
                  setProfileState({ ...profileState, email: inputValue })
                }
              />
              <InputField
                type="password"
                placeholder="password"
                icon={<RiLockPasswordLine />}
                change={(inputValue: string) =>
                  setProfileState({
                    ...profileState,
                    password: inputValue,
                  })
                }
              />
              <InputButton>
                <input type="submit" value="Create account" />
              </InputButton>
            </form>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default SignIn;
