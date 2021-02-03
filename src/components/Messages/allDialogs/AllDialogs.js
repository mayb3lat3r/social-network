import React from 'react';
import s from "./allDialogs.module.css";
import Dialog from "./Dialog/Dialog";


const AllDialogs = (props) => {

    let Dialogs = props.DialogsData.map(elem => <Dialog name={elem.name} lastMessage={elem.lastMessage} id={elem.id} />)

    return (
        <div className={s.main}>
            {Dialogs}
        </div>
    );
}

export default AllDialogs;