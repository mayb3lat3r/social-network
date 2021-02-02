import React from "react";
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <ul className={s.sidebar}>
            <li>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </li>
            <li>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </li>
            <li>
                <NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink>
            </li>
            <li>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
            </li>
            <li>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </li>
            <li>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </li>
        </ul>
    );
};

export default Sidebar;
