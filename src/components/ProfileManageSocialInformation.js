import React from 'react'
import s from './ProfileManageSocialInformation.module.css'


const ProfileManageSocialInformation = () => {
    return(
        <div className={s.profile_manage_social_information}>
        <a href="#" className={s.manage}>
          Manage profile
        </a>
        <div className={s.social_information}>
          <div className={s.social_information__item}>
            <div className={s.social_information__count}>0</div>
            <div className={s.social_information__subject}>friends</div>
          </div>

          <div className={s.social_information__item}>
            <div className={s.social_information__count}>0</div>
            <div className={s.social_information__subject}>subscribers</div>
          </div>

          <div className={s.social_information__item}>
            <div className={s.social_information__count}>0</div>
            <div className={s.social_information__subject}>photos</div>
          </div>

          <div className={s.social_information__item}>
            <div className={s.social_information__count}>0</div>
            <div className={s.social_information__subject}>posts</div>
          </div>
        </div>
      </div>
    );
}

export default ProfileManageSocialInformation;