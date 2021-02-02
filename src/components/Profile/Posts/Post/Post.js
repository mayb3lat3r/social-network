import React from "react";
import s from "./Post.module.css";
import basic from "../../../../App.module.css";
import cp from "../../CreatePost/CreatePost.module.css";

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <a href="#">
                    <img src="/img/avatar.png" alt="avatar"/>
                </a>
            </div>

            <div className={s.case}>
                <div className={s.info}>
                    <h2 className={s.username}>Maxim Zvenigorodsky</h2>
                    <a href="#">
                        <img src="img/more.svg" alt="" className={s.more}/>
                    </a>
                </div>
                <h4 className={s.date}>{props.date}</h4>
                <div className={s.content}>
                    {props.text}
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
                        <div className={s.items_count}>{props.likes}</div>
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
                        <div className={s.items_count}>{props.comments}</div>
                        <p>comments</p>
                    </div>
                </div>

                <div className={s.comment}>
                    <div className={cp.avatar}>
                        <img src="/img/avatar.png" alt="avatar"/>
                    </div>
                    <textarea
                        name=""
                        className={s.input}
                        placeholder="Comment this..."
                    />
                    <a href="#">
                        <img
                            src="/img/attachment.svg"
                            alt="attachment"
                            className={cp.item}
                        />
                    </a>
                    <a href="#">
                        <img src="/img/submit.svg" alt="submit" className={cp.item}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Post;
