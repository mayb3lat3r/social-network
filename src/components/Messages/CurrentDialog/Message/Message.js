import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={s.msgblock}>
            <img className={s.msgavatar} src="img/avatar.png" alt=""/>
            <div className={s.msg}>
                <NavLink className={s.msg__name} to="/profile">{props.name}</NavLink>
                {props.msg}
            </div>
        </div>
    );
}

export default Message;