import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import FriendsBlockContainer from "./FreindsBlock/FriendsBlockContainer";

function Navbar() {

    const setActive = (navData) => navData.isActive ? s.active : s.item

    return (
        <div>
            <div className={`${s.navbar}`}>
                Navbar

                <div >
                    <NavLink className={setActive} to="profile">Profile1</NavLink>
                </div>
                <div>
                    <NavLink className={setActive} to="/dialogs">Messages</NavLink>
                </div>
                <div>
                    <NavLink className={setActive} to={"/news"}>News</NavLink>
                </div>
                <div>
                    <NavLink className={setActive} to={"/music"}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={setActive} to={"/settings"}>Settings</NavLink>
                </div>
                {/*<div></div>*/}
                <div>
                    <NavLink className={setActive} to="/users">Users</NavLink>
                </div>

            </div>

            {/*<FriendsBlock />*/}
            <FriendsBlockContainer/>

        </div>
    );
}

export default Navbar;
