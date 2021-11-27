import s from './Dialogs.module.css'
import React from "react";
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


function Dialogs(props) {

    let newMessage = React.createRef()


    let addMessage = () => {
        let text = newMessage.current.value //получение значения из textarea
        console.log('text=',text)
        //props.addNewMessage(text)
    }

    let dialogsElements = props.state.dialogsArr
        .map(item => <DialogItem dialog={item.dialog} id={item.id}/>)

    let messagesElements = props.state.messagesArr
        .map(item => <MessageItem message={item.message} addNewPost={props.addNewPost}/>)

    return (
        <div className={`${s.grid}`}>

            <div className={s.dialogs}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

                <div>
                    <textarea ref={newMessage}>12345</textarea>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>



        </div>
    );
}

export default Dialogs;