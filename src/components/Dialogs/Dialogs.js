import s from './Dialogs.module.css'
import React from "react";
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";




function Dialogs(props) {

    let dialogsElements = props.state.dialogsArr
        .map(item => <DialogItem dialog={item.dialog} id={item.id}/>)

    let messagesElements = props.state.messagesArr
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