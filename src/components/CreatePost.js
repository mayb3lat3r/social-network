import React from "react";
import s from './CreatePost.module.css';
import basic from '../App.module.css';

const CreatePost = () => {
  return (
    <div className={s.create_post}>
      <div className={s.avatar}>
        <a href="#">
          <img src="/img/avatar.png" alt="avatar"/>
        </a>
      </div>
      <textarea
        name=""
        className={s.input}
        placeholder="Create a new post..."
      ></textarea>
      <a href="#" >
        <img
          src="img/attachment.svg"
          alt="attachment"
          className={s.item}
        />
      </a>
      <a href="#">
        <img src="img/submit.svg" alt="submit" className={s.item} />
      </a>
    </div>
  );
};

export default CreatePost;
