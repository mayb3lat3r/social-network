import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"
import Profile from "./components/Profile";n
import "./App.css";

const App = () => {
  return (
    <body>
      <Header />
      <div className="container container__main">
        <Sidebar />
        <Profile />
      </div>  
    </body>
  );
};

export default App;
