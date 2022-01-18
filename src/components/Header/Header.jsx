import s from './Header.module.css'
import React from "react";
//import Test from "../../test";
import {NavLink} from "react-router-dom";


function Header(props) {
    return (
        <header className={`${s.header}`}>
            header-text
            {/*<Test/>*/}
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login}</div> : <NavLink to={"/login"}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;