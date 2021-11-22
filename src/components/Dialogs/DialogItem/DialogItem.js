import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import logo from "../../../logo.svg";

const DialogItem = (props) => {
    return(
        <div className={s.dialog}>
            {/*<div className={ava}>*/}
                <img src={logo} className={s.avatar} alt={"ava"}/>
            {/*</div>*/}
            <div className={s.dialogName}>
                <NavLink to={"/dialogs/"+props.id}>{props.dialog}</NavLink>
            </div>
            {/*{props.dialog}*/}
        </div>
    )
}

export default DialogItem;