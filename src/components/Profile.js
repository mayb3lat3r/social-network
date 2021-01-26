import React from "react";
import ProfileHat from "./ProfileHat";
import ProfileInfo from "./ProfileInfo";
import ProfileManageSocialInformation from "./ProfileManageSocialInformation";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Profile = () => {
  return (
    <main className="profile">
      <ProfileHat />
      <ProfileInfo />
      <ProfileManageSocialInformation />
      <CreatePost />
      <Post />
      <Post />
    </main>
  );
};

export default Profile;
