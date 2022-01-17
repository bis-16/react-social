import s from './Header.module.css'
import React from "react";
import Test from "../../test";
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <header className={`${s.header}`}>
            header-text
            {/*<Test/>*/}
            <div className={s.loginBlock}>
                <NavLink to={"/login"}>Login</NavLink>
            </div>
        </header>
    );
}

export default Header;