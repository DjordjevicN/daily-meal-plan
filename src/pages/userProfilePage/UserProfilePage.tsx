import React, { useState } from "react";
import { IUser } from "../../constants/types";
import { userProfileInitState } from "../../constants/initStates";
import "./UserProfilePage.scss";

const UserProfilePage = () => {
  const [profileState, setProfileState] = useState<IUser>(userProfileInitState);

  const handleCreateAccount = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(profileState);
  };
  return (
    <div className="profile">
      <div className="content">
        <form onSubmit={handleCreateAccount}>
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
                <option value="heigh">Heigh</option>
              </select>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Create Account" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfilePage;