import React from "react";
import AllDialogs from "./allDialogs/AllDialogs";
import CurrentDialog from "./CurrentDialog/CurrentDialog";
import s from "./Messages.module.css";

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <AllDialogs DialogsData={props.MessagesPage.DialogsData}/>
            <CurrentDialog name="Maxim Zvenigorodsky" status="online" MessagesData={props.MessagesPage.MessagesData}/>
        </div>
    );
};

export default Messages;
