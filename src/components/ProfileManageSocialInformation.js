import React from 'react'


const ProfileManageSocialInformation = () => {
    return(
        <div className="profile-manage-social-information">
        <a href="#" className="manage-profile">
          Manage profile
        </a>
        <div className="social-information">
          <div className="social-information__items">
            <div className="social-information__count">0</div>
            <div className="social-information__subject">friends</div>
          </div>

          <div className="social-information__items">
            <div className="social-information__count">0</div>
            <div className="social-information__subject">subscribers</div>
          </div>

          <div className="social-information__items">
            <div className="social-information__count">0</div>
            <div className="social-information__subject">photos</div>
          </div>

          <div className="social-information__items">
            <div className="social-information__count">0</div>
            <div className="social-information__subject">posts</div>
          </div>
        </div>
      </div>
    );
}

export default ProfileManageSocialInformation;