import React from "react";
import ProfileHat from "./ProfileHat/ProfileHat";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileManageSocialInformation from "./ProfileManageSocialInformation/ProfileManageSocialInformation";
import CreatePost from "./CreatePost/CreatePost";
import Posts from "./Posts/Posts"
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <main className={s.profile}>
            <ProfileHat/>
            <ProfileInfo/>
            <ProfileManageSocialInformation/>
            <CreatePost/>
            <Posts/>
        </main>
    );
};

export default Profile;
