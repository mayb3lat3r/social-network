import React from "react";
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <ul className={s.sidebar}>
            <li>
                <NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink>
            </li>
            <li>
                <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink>
            </li>
            <li>
                <NavLink to="/Messages" activeClassName={s.activeLink}>Messages</NavLink>
            </li>
            <li>
                <NavLink to="/Friends" activeClassName={s.activeLink}>Friends</NavLink>
            </li>
            <li>
                <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink>
            </li>
            <li>
                <NavLink to="/Settings" activeClassName={s.activeLink}>Settings</NavLink>
            </li>
        </ul>
    );
};

export default Sidebar;
