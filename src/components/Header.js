import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src="img/logotype.png" alt="logo" />
        </a>
      </div>

      <div className="container">
        <nav className="nav">
          <input href="#" className="nav__search" placeholder="Search"></input>
          <a href="#" className="nav__notifications">
            <img
              src="img/notification.svg"
              alt="notifications"
              className="icon-header"
            />
          </a>
          <a href="#" className="nav__music-player">
            <img
              src="img/music-player-1.svg"
              alt="music-player"
              className="icon-header"
            />
          </a>
        </nav>
      </div>

      <div className="user">
        <div className="user__avatar">
          <img src="img/avatar.png" alt="user avatar" />
        </div>
        <div className="user__username">Maxim</div>
        <div className="user__more">
          <a href="#">
            <img src="img/user-more.svg" alt="user more" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
