import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
// import Users from "./components/Users/Users";


function App(props) {
    return (
        <Router>
            <div className="app-wrapper">

                <Header/>
                <Navbar/>
                {/*<Dialogs />*/}
                <div className={"appWrapperContent"}>
                    <Routes> {/*Routes === Switch*/}
                        <Route path={'/dialogs/*'} element={<DialogsContainer //dialogsPage={props.state.dialogsPage}
                                                                   //dispatch = {props.dispatch}
                                                                   // store = {props.store}
                                                          />}
                        />   {/*element === component*/}
                        <Route path={'/profile'} element={<ProfileContainer />} />
                        <Route path={'/profile/*'} element={<ProfileContainer // profilePage={props.state.profilePage}
                                                                   // dispatch = {props.dispatch}
                                                                   // addNewPost={props.addNewPost}
                                                                   // updateNewPostText={props.updateNewPostText}/> }
                                                                   // store = {props.store}
                                                          />}
                        />
                        <Route path={'/users/*'} element={<UsersContainer/>} />
                        <Route path={'/news'} element={<News/>} />
                        <Route path={'/music'} element={<Music/>} />
                        <Route path={'/settings'} element={<Settings/>} />
                    </Routes>
                </div>

            </div>
        </Router>
    );
}

export default App;
