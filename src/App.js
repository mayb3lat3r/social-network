import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import s from "./App.module.css";

const App = (props) => {
    return (
        <body>
        <BrowserRouter>
            <Header/>
            <div className={s.container}>
                <Sidebar/>
                <Route path="/profile" render={() => <Profile
                    ProfilePage={props.state.ProfilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/messages" render={() => <Messages MessagesPage={props.state.MessagesPage}/>}/>
            </div>
        </BrowserRouter>
        </body>
    );
};

export default App;
