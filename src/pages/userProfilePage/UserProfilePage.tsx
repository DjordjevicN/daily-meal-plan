import React, { useState } from "react";

import "./UserProfilePage.scss";
import EditUserProfileInformation from "../../components/modals/editUserProfileInformation/EditUserProfileInformation";

const UserProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);

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
                <span>Name:</span>Nikola
              </p>
              <p>
                <span>Email:</span>nikola.dj.87@gmail.com
              </p>

              <p>
                <span>Password:</span>654654
              </p>
              <p>
                <span>Age:</span>35
              </p>
            </div>
            <div className="body">
              <p>
                <span>Weight:</span>187
              </p>
              <p>
                <span>Height:</span>110
              </p>
              <p>
                <span>Gender:</span>Male
              </p>
              <p>
                <span>Calories:</span>2250
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
