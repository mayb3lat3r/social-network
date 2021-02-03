import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Dialog.module.css"

const Dialog = (props) => {

    let path = `/messages/${props.id}`

    return (

        <NavLink to={path}>

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
        </NavLink>
    );
}

export default Dialog;