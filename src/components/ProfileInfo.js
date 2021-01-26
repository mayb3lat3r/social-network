import React from 'react';

const ProfileInfo = () => {
    return(
        <div className="profile-info">
        <div className="profile-info__avatar">
          <a href="#" className="user__avatar-link">
            <img src="img/avatar.png" alt="avatar" />
          </a>
        </div>

        <div className="profile-info__description">
          <h1 className="profile-info__username">Maxim Zvenigorodsky</h1>
          <div className="profile-info__user-information">
            <ul className="profile-info__params">
              <li className="profile-info__params-item">Date of birth:</li>
              <li className="profile-info__params-item">City:</li>
              <li className="profile-info__params-item">Marital status:</li>
              <li className="profile-info__params-item">Web-site:</li>
            </ul>

            <ul className="profile-info__params-answers">
              <a href="#">
                <li className="profile-info__params-answers-items">
                  1 december 2020
                </li>
              </a>
              <a href="#">
                <li className="profile-info__params-answers-items">Moscow</li>
              </a>
              <a href="#">
                <li className="profile-info__params-answers-items">rat</li>
              </a>
              <a href="#">
                <li className="profile-info__params-answers-items">
                  www.googlag.com
                </li>
              </a>
            </ul>
          </div>

          <a href="#" className="profile-info__button-more">
            See more
          </a>
        </div>
      </div>
    );
}

export default ProfileInfo;