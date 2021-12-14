import s from './Header.module.css'
import React from "react";
import Test from "../../test";

function Header() {
    return (
        <header className={`${s.header}`}>
            header-text
            <Test/>
        </header>
    );
}

export default Header;