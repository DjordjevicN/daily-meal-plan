import React, { useState } from "react";
import "./EditUserProfileInformation.scss";
import { GrClose } from "react-icons/gr";
import { IUser } from "../../../constants/types";
// import { userProfileInitState } from "../../../constants/initStates";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../state";
import { bindActionCreators } from "redux";

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditUserProfileInformation: React.FC<IProps> = (props) => {
  const user = useSelector((state: State) => {
    return state.user;
  });
  const [profileState, setProfileState] = useState<IUser>(user);
  const dispatch = useDispatch();
  const { getUser } = bindActionCreators(actionCreators, dispatch);

  const handleUpdateAccount = (event: React.FormEvent) => {
    event.preventDefault();
    props.setOpenModal(false);
    console.log(profileState);
    console.log(getUser);
  };

  return (
    <div className="editProfileModal">
      <div className="content">
        <div className="exitBtn">
          <GrClose onClick={() => props.setOpenModal(false)} />
        </div>
        <form onSubmit={handleUpdateAccount}>
          <div className="inputBlock">
            <p className="inputLabel">Image</p>
            <div className="inputEl">
              <input
                type="file"
                onChange={(e) => {
                  setProfileState({ ...profileState, img: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="inputBlock">
            <p className="inputLabel">Email</p>
            <div className="inputEl">
              <input
                type="text"
                value={profileState.email}
                onChange={(e) => {
                  setProfileState({ ...profileState, email: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="inputBlock">
            <p className="inputLabel">Password</p>
            <div className="inputEl">
              <input
                type="password"
                value={profileState.password}
                onChange={(e) => {
                  setProfileState({
                    ...profileState,
                    password: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="inputBlock">
            <p className="inputLabel">Name</p>
            <div className="inputEl">
              <input
                type="text"
                value={profileState.name}
                onChange={(e) => {
                  setProfileState({ ...profileState, name: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="inputBlock">
            <p className="inputLabel">Weight in kg</p>
            <div className="inputEl">
              <input
                type="text"
                value={profileState.weight}
                onChange={(e) => {
                  setProfileState({ ...profileState, weight: +e.target.value });
                }}
              />
            </div>
          </div>
          <div className="inputBlock">
            <p className="inputLabel">Height in cm</p>
            <div className="inputEl">
              <input
                type="text"
                value={profileState.height}
                onChange={(e) => {
                  setProfileState({ ...profileState, height: +e.target.value });
                }}
              />
            </div>
          </div>
          <div className="inputBlock">
            <p className="inputLabel">Gender</p>
            <div className="inputEl">
              <select
                name="Gender"
                onChange={(e) => {
                  setProfileState({ ...profileState, gender: +e.target.value });
                }}
              >
                <option value={1}>Male</option>
                <option value={0}>Female</option>
              </select>
            </div>
          </div>
          <div className="inputBlock">
            <p className="inputLabel">Age</p>
            <div className="inputEl">
              <input
                type="text"
                value={profileState.age}
                onChange={(e) => {
                  setProfileState({ ...profileState, age: +e.target.value });
                }}
              />
            </div>
          </div>
          <div className="inputBlock">
            <p className="inputLabel">Calories per day</p>
            <div className="inputEl">
              <input
                type="text"
                value={profileState.calories}
                onChange={(e) => {
                  setProfileState({
                    ...profileState,
                    calories: +e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="inputBlock">
            <p className="inputLabel">Fat</p>
            <div className="inputEl">
              <input
                type="text"
                value={profileState.fat}
                onChange={(e) => {
                  setProfileState({ ...profileState, fat: +e.target.value });
                }}
              />
            </div>
          </div>
          <div className="inputBlock">
            <p className="inputLabel">Activity level</p>
            <div className="inputEl">
              <select
                name="activity"
                onChange={(e) => {
                  setProfileState({
                    ...profileState,
                    activity_level: e.target.value,
                  });
                }}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">Heigh</option>
              </select>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Update Account" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserProfileInformation;
