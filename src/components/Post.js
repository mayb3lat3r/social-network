import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="post__avatar">
        <a href="#">
          <img src="/img/avatar.png" alt="avatar" />
        </a>
      </div>

      <div className="post__case">
        <span>
          <h2 className="post__username">Maxim Zvenigorodsky</h2>
          <a href="#">
            <img src="/img/more.svg" alt="" className="post__more" />
          </a>
        </span>
        <h4 className="post__date">29.08.2020</h4>
        <div className="post__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit,cus vel facilisis.
        </div>
        <div className="post__reactions">
          <div className="post__item">
            <a href="#">
              <img src="/img/like.svg" alt="likes" className="icon-middle" />
            </a>
            <div className="post__count">0</div>
            <p>likes</p>
          </div>

          <div className="post__item">
            <a href="#">
              <img
                src="/img/comment.svg"
                alt="comments"
                className="icon-middle"
              />
            </a>
            <div className="post__count">0</div>
            <p>comments</p>
          </div>
        </div>

        <div className="post__comment">
          <div className="create-post__avatar">
            <img src="/img/avatar.png" alt="avatar" />
          </div>
          <textarea
            name=""
            className="create-post__input"
            placeholder="Comment this..."
          ></textarea>
          <a href="#">
            <img
              src="/img/attachment.svg"
              alt="attachment"
              className="create-post__attachment icon-middle"
            />
          </a>
          <a href="#">
            <img
              src="/img/submit.svg"
              alt="submit"
              className="create-post__submit icon-middle"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
