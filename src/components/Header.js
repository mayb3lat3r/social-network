import React from "react";
import s from './Header.module.css';
import basic from '../App.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <a href="#">
          <img src="img/logotype.png" alt="logo" />
          <span className={s.logo_text}>Company</span>
        </a>
      </div>

      <div className={basic.container}>
        <nav className={s.nav}>
          <input href="#" className={s.nav__search} placeholder="Search"></input>
          <a href="#" className={s.nav__item}>
            <img
              src="img/notification.svg"
              alt="notifications"
              className={s.icon}
            />
          </a>
          <a href="#" className={s.nav__item}>
            <img
              src="img/music-player-1.svg"
              alt="music-player"
              className={s.icon}
            />
          </a>
        </nav>
      </div>

      <div className={s.user}>
        <div className={s.user__avatar}>
          <img src="img/avatar.png" alt="User" />
        </div>
        <div className={s.user__username}>Maxim</div>
        <div className={s.user__more}>
          <a href="#">
            <img src="img/user-more.svg" alt="More" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
