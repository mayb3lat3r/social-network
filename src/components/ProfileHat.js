import React from 'react';

const ProfileHat = () => {
    return(
        <div className="profile-hat">
        <div className="profile-hat__settings">
          <a href="#" className="link">
            <img src="img/change-background.svg" alt="ch.b" />
            <p>Change background</p>
          </a>
        </div>
        <img
          src="img/profile-hat-background.jpg"
          alt=""
          className="profile-background"
        />
      </div>
    );
}

export default ProfileHat;