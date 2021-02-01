import React from "react";
import allDialogs from "./allDialogs/allDialogs";
import currentDialog from "./currentDialog/currentDialog";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
      <main className={s.Dialogs}>
        <allDialogs />
        <currentDialog/>
        DIALOGS
      </main>
  );
};

export default Dialogs;
