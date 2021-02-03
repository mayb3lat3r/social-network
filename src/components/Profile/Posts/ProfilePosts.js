import React from "react";
import Post from "./Post/Post";
import s from "./ProfilePosts.module.css"


const ProfilePosts = (props) => {

    let Posts = props.PostsData.map(elem => <Post text={elem.text} likes={elem.likes} comments={elem.comments} date={elem.date}/>);

    return (
        <div className={s.posts}>
            {Posts}
        </div>
    );
}

export default ProfilePosts;