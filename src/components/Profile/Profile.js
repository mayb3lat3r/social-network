import React from "react";
import ProfileHat from "./ProfileHat/ProfileHat";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileManageSocialInformation from "./ProfileManageSocialInformation/ProfileManageSocialInformation";
import CreatePost from "./CreatePost/CreatePost";
import ProfilePosts from "./Posts/ProfilePosts"
import s from "./Profile.module.css";


const Profile = (props) => {
    return (
        <main className={s.profile}>
            <ProfileHat/>
            <ProfileInfo/>
            <ProfileManageSocialInformation/>
            <CreatePost addPost={props.addPost} NewPostText={props.ProfilePage.NewPostText} updateNewPostText={props.updateNewPostText}/>
            <ProfilePosts PostsData={props.ProfilePage.PostsData}/>
        </main>
    );
};

export default Profile;
