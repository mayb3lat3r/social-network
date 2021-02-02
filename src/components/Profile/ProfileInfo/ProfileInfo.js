import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={s.profile_info}>
            <div className={s.avatar}>
                <a href="#">
                    <img src="img/avatar.png" alt="Avatar"/>
                </a>
            </div>

            <div className={s.description}>
                <h1 className={s.username}>Maxim Zvenigorodsky</h1>
                <div className={s.user_information}>
                    <ul className={s.params}>
                        <li>Date of birth:</li>
                        <li>City:</li>
                        <li>Marital status:</li>
                        <li>Web-site:</li>
                    </ul>
                    <ul className={s.params_answers}>
                        <a href="#">
                            <li>1 december 2020</li>
                        </a>

                        <a href="#">
                            <li>Moscow</li>
                        </a>

                        <a href="#">
                            <li>rat</li>
                        </a>

                        <a href="#">
                            <li>www.goolag.com</li>
                        </a>
                    </ul>
                </div>

                <a href="#" className={s.more}>
                    See more
                </a>
            </div>
        </div>
    );
};

export default ProfileInfo;
