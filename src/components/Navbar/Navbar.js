import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import FriendsBlock from "./FreindsBlock/FriendsBlock";

function Navbar() {
    return (
        <div>
            <div className={`${s.navbar}`}>
                Navbar

                <div >
                    <NavLink className={(navData)=>navData.isActive ? s.active : s.item} to="profile">Profile1</NavLink>
                </div>
                <div>
                    <NavLink className={(navData)=>navData.isActive ? s.active : s.item} to="/dialogs">Messages</NavLink>
                </div>
                <div>
                    <NavLink className={(navData)=>navData.isActive ? s.active : s.item} to={"/news"}>News</NavLink>
                </div>
                <div>
                    <NavLink className={(navData)=>navData.isActive ? s.active : s.item} to={"/music"}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={(navData)=>navData.isActive ? s.active : s.item} to={"/settings"}>Settings</NavLink>
                </div>
            </div>

            <FriendsBlock />

        </div>
    );
}

export default Navbar;
