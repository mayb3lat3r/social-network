import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
      <main className={s.Dialogs}>
        <allDialogs />
        <currentDialog/>
      </main>
  );
};

export default Dialogs;
