import React from 'react';
import s from "./currentDialog.module.css"
import {NavLink} from "react-router-dom";


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


let MessagesData = [
    {
        id: 0,
        name: "Maxim Zvenigorodsky",
        message: "Hello world"
    },
    {
        id: 1,
        name: "Anton Mamedov",
        message: "У коровы нет других забот"
    },
    {
        id: 0,
        name: "Maxim Zvenigorodsky",
        message: "Это точно."
    }
]


let Messages = MessagesData.map(elem => <Message id={elem.id} name={elem.name} msg={elem.message}/>);


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

                {Messages}

            </div>

            <div className={s.message}>
                <a href="#"><img src="/img/attachment.svg" alt="attachment" className={s.item}/></a>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <a href="#"><img src="/img/submit.svg" alt="" placeholder="Write a message here" className={s.item}/></a>
            </div>
        </div>
    );
}

export default CurrentDialog;
