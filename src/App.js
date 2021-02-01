import React from "react"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import s from "./App.module.css"

const App = () => {
  return (
    <body>
      <Header />
      <div className={s.container}>
        <Sidebar />
        {/*<Profile />*/}
        <Dialogs />
      </div>  
    </body>
  );
};

export default App;
