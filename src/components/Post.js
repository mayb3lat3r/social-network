import React from "react";
import s from "./Post.module.css";
import basic from "../App.module.css";
import cp from "./CreatePost.module.css";

const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <a href="#">
          <img src="/img/avatar.png" alt="avatar" />
        </a>
      </div>

      <div className={s.case}>
        <span>
          <h2 className={s.username}>Maxim Zvenigorodsky</h2>
          <a href="#">
            <img src="/img/more.svg" alt="" className="post__more" />
          </a>
        </span>
        <h4 className={s.date}>29.08.2020</h4>
        <div className={s.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit,cus vel facilisis.
        </div>
        <div className={s.reactions}>
          <div className={s.item}>
            <a href="#">
              <img
                src="/img/like.svg"
                alt="likes"
                className={basic.icon_middle}
              />
            </a>
            <div className={s.likes_count}>0</div>
            <p>likes</p>
          </div>

          <div className={s.item}>
            <a href="#">
              <img
                src="/img/comment.svg"
                alt="comments"
                className={basic.icon_middle}
              />
            </a>
            <div className={s.likes_count}>0</div>
            <p>comments</p>
          </div>
        </div>

        <div className={s.comment}>
          <div className={cp.avatar}>
            <img src="/img/avatar.png" alt="avatar" />
          </div>
          <textarea
            name=""
            className={s.input}
            placeholder="Comment this..."
          ></textarea>
          <a href="#">
            <img
              src="/img/attachment.svg"
              alt="attachment"
              className={cp.item}
            />
          </a>
          <a href="#">
            <img src="/img/submit.svg" alt="submit" className={cp.item} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
