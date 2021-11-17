import s from './Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
    <div className={s.dialog}>
        <NavLink to={"/dialogs/"+props.id}>{props.dialog}</NavLink>
        {/*{props.dialog}*/}
    </div>
    )
}

const MessageItem = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

function Dialogs(props) {

    let dialogsElements = props.dialogsArr
        .map(item => <DialogItem dialog={item.dialog} id={item.id}/>)

    let messagesElements = props.messagesArr
        .map(item => <MessageItem message={item.message}/>)

    return (
        <div className={`${s.grid}`}>

            <div className={s.dialogs}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    );
}

export default Dialogs;