import React from 'react';
import s from "./allDialogs.module.css";
import Dialog from "./Dialog/Dialog";

let DialogsData = [
    {
        id: 0,
        name: "Maxim Zvenigorodsky",
        lastMessage: "кто гей"
    },
    {
        id: 1,
        name: "Anton Mamedov",
        lastMessage: "ты гей"
    },
    {
        id: 2,
        name: "Sanya Ivanov",
        lastMessage: "член"
    },
    {
        id: 3,
        name: "Maxim Zvenigorodsky",
        lastMessage: "кто гей"
    },
    {
        id: 4,
        name: "Ioan Boneflatcher",
        lastMessage: "их хабэ айне катце"
    },
    {
        id: 5,
        name: "Mikhail Goo",
        lastMessage: "слизь?"
    },
    {
        id: 6,
        name: "Pavel Durovv",
        lastMessage: "Da kto ti takoy>?"
    },
]

let Dialogs = DialogsData.map(elem => <Dialog name={elem.name} lastMessage={elem.lastMessage} id={elem.id} />)


const AllDialogs = (props) => {

    return (
        <div className={s.main}>
            {Dialogs}
        </div>
    );
}

export default AllDialogs;