import React from "react";
import s from './CreatePost.module.css';


const CreatePost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.create_post}>
            <div className={s.avatar}>
                <a href="#">
                    <img src="/img/avatar.png" alt="avatar"/>
                </a>
            </div>

            <textarea
                className={s.input}
                value={props.NewPostText}
                ref={newPostElement}
                onChange={onPostChange}
            />

            <img
                src="img/attachment.svg"
                alt="attachment"
                className={s.item}
            />

            <img
                onClick={addPost}
                src="img/submit.svg"
                alt="submit"
                className={s.item}
            />

        </div>
    );
};

export default CreatePost;
