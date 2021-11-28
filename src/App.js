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


function App(props) {
    return (
        <Router>
            <div className="app-wrapper">

                <Header/>
                <Navbar/>
                {/*<Dialogs />*/}
                <div className={"appWrapperContent"}>
                    <Routes> {/*Routes === Switch*/}
                        <Route path={'/dialogs'} element={<Dialogs state={props.state.dialogsPage} />} />   {/*element === component*/}
                        <Route path={'/profile'} element={<Profile profilePage={props.state.profilePage}
                                                                   // addNewPost={props.addNewPost}
                                                                   // updateNewPostText={props.updateNewPostText}/> }
                                                                   dispatch = {props.dispatch}
                                                          />}
                        />
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
