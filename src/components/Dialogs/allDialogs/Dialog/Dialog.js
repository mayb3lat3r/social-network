import React from 'react';
import s from "./Dialog.module.css"

const Dialog = (props) => {
    return (
        <div className={s.main}>
            <div className={s.avatar}>
                <img src="./avatars/ava.jpg" alt="avatar"/>
            </div>
            <div className={s.info}>
                <div className={s.name}>
                    {props.name};
                </div>
                <div className={s.lastMessage}>
                    {props.lastMessage};
                </div>
            </div>
        </div>
    );
}

export default Dialog;