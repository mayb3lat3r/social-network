import React from "react";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li className="sidebar__item">
        <a href="#">Profile</a>
      </li>
      <li className="sidebar__item">
        <a href="#">News</a>
      </li>
      <li className="sidebar__item">
        <a href="#">Messages</a>
      </li>
      <li className="sidebar__item">
        <a href="#">Friends</a>
      </li>
      <li className="sidebar__item">
        <a href="#">Music</a>
      </li>
      <li className="sidebar__item">
        <a href="#">Settings</a>
      </li>
    </ul>
  );
};

export default Sidebar;
