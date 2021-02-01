import React from "react";
import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <ul className={s.sidebar}>
      <li>
        <a href="/Profile">Profile</a>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="/Dialogs">Messages</a>
      </li>
      <li>
        <a href="#">Friends</a>
      </li>
      <li>
        <a href="#">Music</a>
      </li>
      <li>
        <a href="#">Settings</a>
      </li>
    </ul>
  );
};

export default Sidebar;
