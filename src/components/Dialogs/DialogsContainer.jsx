import React from "react";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../myRedux/dialogsReducer";
import Dialogs from "./Dialogs";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {connect} from "react-redux";


// function DialogsContainer(props) {
//
//     let state = props.store.getState().dialogsPage
//
// //    return (//<StoreContext.Consumer>
//         //{
//            // store => {
//
//             let addNewMessage = () => {
//                 props.store.dispatch(addNewMessageActionCreator())
//             }
//
//             let onMessageChange = (text) => {
//                 console.log("dialogsContainer.js>onMessageChange")
//                 props.store.dispatch(updateNewMessageActionCreator(text))
//
//             }
//             return <Dialogs addNewMessageCont={addNewMessage}
//                             onMessageChangeCont={onMessageChange}
//                             dialogsPage = {state}
//                             // dialogsArr = {state.dialogsPage.dialogsArr}
//                             // messagesArr = {state.dialogsPage.messagesArr}
//                    />
//         //}
//
//     //}
//     //</StoreContext.Consumer>
// //)
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessageCont: () => {dispatch(addNewMessageActionCreator())},
        onMessageChangeCont: (text) => {dispatch(updateNewMessageActionCreator(text))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;














