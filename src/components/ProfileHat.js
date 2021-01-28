import React from 'react';
import s from './ProfileHat.module.css'


const ProfileHat = () => {
    return(
        <div className={s.hat}>
        <div className={s.settings}>
          <a href="#" className={s.link}>
            <img src="img/change-background.svg" alt="change background" />
            <p>Change background</p>
          </a>
        </div>
        <img
          src="img/profile-hat-background.jpg"
          alt=""
          className={s.profile_background}
        />
      </div>
    );
}

export default ProfileHat;