import React from 'react';
import s from "./Dialog.module.css"

const Dialog = (props) => {
    return (
        <div className={s.main}>

            <img className={s.avatar} src="img/avatar.png" alt=""/>

            <div className={s.info}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.lastMessage}>
                    {props.lastMessage}
                </div>
            </div>
        </div>
    );
}

export default Dialog;