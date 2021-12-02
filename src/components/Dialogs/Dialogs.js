import s from './Dialogs.module.css'
import React from "react";
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../myRedux/dialogsReducer";


function Dialogs(props) {


    let dialogsElements = props.dialogsPage.dialogsArr
        .map(item => <DialogItem dialog={item.dialog}
                                 id={item.id}
                     />)

    let messagesElements = props.dialogsPage.messagesArr
        .map(item => <MessageItem message={item.message}
                                  addNewPost={props.addNewPost}
                     />)

    // let newMessage = React.createRef()

    // let addMessage = () => {
    //     let text = newMessage.current.value //получение значения из textarea
    //     console.log('text=',text)
    //     //props.addNewMessage(text)
    // }
    let addNewMessage = () => {
        // let text = newMessage.current.value
        // props.addNewPost(text)
        props.dispatch(addNewMessageActionCreator())
        // console.log('text=',text)
        // debugger
    }

    let onMessageChange = (event) => {
        console.log("dialogs.js>onMessageChange")
        // let text = newMessage.current.value
        // props.dispatch(updateNewMessageActionCreator(text))
        // debugger

        let text = event.target.value;
        props.dispatch(updateNewMessageActionCreator(text))

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