import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"
import Profile from "./components/Profile";
import s from "./App.module.css";

const App = () => {
  return (
    <body>
      <Header />
      <div className={s.container}>
        <Sidebar />
        <Profile />
      </div>  
    </body>
  );
};

export default App;
