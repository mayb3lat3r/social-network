import React from "react";
import ProfileHat from "./ProfileHat/ProfileHat";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileManageSocialInformation from "./ProfileManageSocialInformation/ProfileManageSocialInformation";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={s.profile}>
      <ProfileHat />
      <ProfileInfo />
      <ProfileManageSocialInformation />
      <CreatePost />
      <Post text="Сказал любую фразу" likes="10" comments="2" date="29.01.2021"/>
      <Post text="КТО ЗДЕСЬ АААААААААА" likes="5" comments="0" date="10.12.2020" />
      <Post text="Ну и ладно" likes="9999" comments="999999"  date="3.11.2020"/>
    </main>
  );
};

export default Profile;
