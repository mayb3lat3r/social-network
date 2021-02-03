import React from "react";
import Post from "./Post/Post";
import s from "./ProfilePosts.module.css"

let PostsData = [
    {
        text: "Сказал любую фразу",
        likes: 10,
        comments: 2,
        date: "29.01.2021"
    },
    {
        text: "КТО ЗДЕСЬ АААААААААА",
        likes: 5,
        comments: 0,
        date: "10.12.2020"
    },
    {
        text: "Ну и ладно",
        likes: 9999,
        comments: 9999,
        date: "3.11.2020"
    },
    {
        text: "Теперь я пишу посты совсем по-другому, блять",
        likes: -10,
        comments: 69,
        date: "1.1.1"
    }
]

let Posts = PostsData.map(elem => <Post text={elem.text} likes={elem.likes} comments={elem.comments} date={elem.date}/>);

const ProfilePosts = () => {

    return (
        <div className={s.posts}>
            {Posts}
        </div>
    );
}

export default ProfilePosts;