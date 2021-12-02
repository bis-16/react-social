const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export let addNewMessageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE}
}
export let updateNewMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            state.messagesArr.push(newMessage)
            state.newMessageText = ""

            break;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText
            break;
        }
        default: return state
    }

    return state
}

export default dialogsReducer;