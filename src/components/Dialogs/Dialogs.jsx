import s from './Dialogs.module.css'
import React from "react";
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../myRedux/dialogsReducer";


function Dialogs(props) {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsArr
        .map(item => <DialogItem dialog={item.dialog}
                                 id={item.id}
                     />)

    let messagesElements = state.messagesArr
        .map(item => <MessageItem message={item.message}
                                  addNewPost={props.addNewPost}
                     />)

    let addNewMessage = () => {
        props.addNewMessageCont()
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.onMessageChangeCont(text)

    }

    return (
        <div className={`${s.grid}`}>

            <div className={s.dialogs}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

                {/*<div>*/}
                    <textarea
                        placeholder={'Enter you message'}
                        // ref={newMessage}
                        onChange={onMessageChange}
                        value={props.dialogsPage.newMessageText}
                    />
                    <button onClick={addNewMessage}>Send</button>
                {/*</div>*/}
            </div>



        </div>
    );
}

export default Dialogs;