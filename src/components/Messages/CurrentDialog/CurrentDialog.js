import React from 'react';
import s from "./currentDialog.module.css"

const CurrentDialog = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <div className={s.user}>
                    <img className={s.avatar} src="/img/user-avatar.png" alt=""/>
                    <div className={s.name}>{props.name}</div>
                </div>
                <div className={s.status}>{props.status}</div>
            </div>
            <div className={s.content}></div>
            <div className={s.message}></div>
        </div>
    );
}

export default CurrentDialog;
