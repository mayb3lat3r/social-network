import React from 'react';
import s from "./allDialogs.module.css";
import Dialog from "./Dialog/Dialog";

const AllDialogs = (props) => {
    return (
        <div className={s.main}>
            <Dialog name="Maxim Zvenigorodsky" lastMessage="кто гей"/>
            <Dialog name="Anton Mamedov" lastMessage="ты гей"/>
            <Dialog name="Sanya Ivanov" lastMessage="член"/>
            <Dialog name="Ioan Boneflatcher" lastMessage="их хабэ айне катце"/>
            <Dialog name="Vlad Orexov" lastMessage="..."/>
            <Dialog name="Mikhail Goo" lastMessage="слизь?"/>
            <Dialog name="Pavel Durovv" lastMessage="Da kto ti takoy>?"/>



        </div>
    );
}

export default AllDialogs;