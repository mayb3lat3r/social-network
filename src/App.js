import React from "react"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";
import s from "./App.module.css"

const App = (props) => {
    return (
        <BrowserRouter>
            <body>
            <Header/>
            <div className={s.container}>
                <Sidebar/>

                <Route path="/Profile" component={Profile}/>
                <Route path="/Dialogs" component={Dialogs}/>

            </div>
            </body>
        </BrowserRouter>
    );
};

export default App;
