import React from 'react';
import s from './allDialogs.module.css';
import Dialog from "./Dialog/Dialog";

const allDialogs = (props) => {
    return (
        <div className={s.main}>
            <Dialog name="Anton Mamedov" lastMessage="ты гей" />
            <Dialog name="Anton Mamedov" lastMessage="ты гей" />
            <Dialog name="Anton Mamedov" lastMessage="ты гей" />
            <Dialog name="Anton Mamedov" lastMessage="ты гей" />
        </div>
    );
}

export default allDialogs;