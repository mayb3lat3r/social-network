import React from "react";
import AllDialogs from "./allDialogs/AllDialogs";
import CurrentDialog from "./CurrentDialog/CurrentDialog";
import s from "./Messages.module.css";

const Messages = () => {
    return (
        <div className={s.messages}>
            <AllDialogs/>
            <CurrentDialog name="Maxim Zvenigorodsky" status="online"/>
        </div>
    );
};

export default Messages;
