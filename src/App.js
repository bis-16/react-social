import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import Users from "./components/Users/Users";


function App(props) {
    return (
            <div className="app-wrapper">

                <HeaderContainer/>
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
                        <Route path={'/profile/:userId'} element={<ProfileContainer // profilePage={props.state.profilePage}
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
                        {/*<Route path={'/login'} element={<News/>} />*/}
                    </Routes>
                </div>

            </div>
    );
}

export default App;
