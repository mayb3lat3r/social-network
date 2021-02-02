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

            <div className={s.content}>

            </div>

            <div className={s.message}>
                <a href="#"><img src="/img/attachment.svg" alt="attachment" className={s.item} /></a>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <a href="#"><img src="/img/submit.svg" alt="" placeholder="Write a message here" className={s.item}/></a>
            </div>
        </div>
    );
}

export default CurrentDialog;
