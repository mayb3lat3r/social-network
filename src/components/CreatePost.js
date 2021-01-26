import React from 'react'


const CreatePost = () => {
    return(
        <div className="create-post">
        <div className="create-post__avatar">
          <a href="#">
            <img src="/img/avatar.png" alt="avatar" />
          </a>
        </div>
        <textarea
          name=""
          className="create-post__input"
          placeholder="Create a new post..."
        ></textarea>
        <a href="#">
          <img
            src="img/attachment.svg"
            alt="attachment"
            className="icon-middle"
          />
        </a>
        <a href="#">
          <img src="img/submit.svg" alt="submit" className="icon-middle" />
        </a>
      </div>
    );
}

export default CreatePost;