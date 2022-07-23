import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./UserProfilePage.scss";
import EditUserProfileInformation from "../../components/modals/editUserProfileInformation/EditUserProfileInformation";
import { State } from "../../state";

const UserProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const user = useSelector((state: State) => state.user);

  return (
    <>
      <div className="profile">
        <div className="content">
          <div className="avatar">
            <img src="images/logoColor.png" alt="avatar" />
          </div>
          <div className="info">
            <div className="personal">
              <p>
                <span>Name:</span>
                {user.name}
              </p>
              <p>
                <span>Email:</span>
                {user.email}
              </p>
              <p>
                <span>Age:</span>
                {user.age}
              </p>
              <p>
                <span>Gender:</span>
                {user.gender}
              </p>
            </div>
            <div className="body">
              <p>
                <span>Weight:</span>
                {user.weight}
              </p>
              <p>
                <span>Height:</span>
                {user.height}
              </p>

              <p>
                <span>Calories:</span>
                {user.calories_needed}
              </p>
            </div>
          </div>
          <div className="actions">
            <button className="editProfile" onClick={() => setOpenModal(true)}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      {openModal && <EditUserProfileInformation setOpenModal={setOpenModal} />}
    </>
  );
};

export default UserProfilePage;
