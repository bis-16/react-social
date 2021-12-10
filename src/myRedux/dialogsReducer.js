const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addNewMessageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE}
}
export const updateNewMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

const initialState = {
    dialogsArr: [
        {id: 1, dialog: "user1"},
        {id: 2, dialog: "user2"},
        {id: 3, dialog: "group1"},
        {id: 4, dialog: "user4"},
        {id: 5, dialog: "user5"},
        {id: 6, dialog: "user6"},
    ],
    messagesArr: [
        {id: 1, message: "hello"},
        {id: 2, message: "how are you?"},
        {id: 3, message: "=)"},
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            let stateCopy = {
                ...state,
                messagesArr: [...state.messagesArr, newMessage],
                newMessageText: ""
            }
            //state.messagesArr.push(newMessage)
            //state.newMessageText = ""

            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {
                    ...state,
                    newMessageText: action.newText
            }
            return stateCopy
        }
        default:
            return state
    }


}

export default dialogsReducer;