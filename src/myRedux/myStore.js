import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            postsArr: [
                {id: 1, message: "this is my first post", likes: 54, dislikes: 8},
                {id: 2, message: "post2", likes: 21, dislikes: 98},
                {id: 3, message: "post3", likes: 24, dislikes: 48},
                {id: 4, message: "post4", likes: 64, dislikes: 38},
                {id: 5, message: "post5", likes: 14, dislikes: 18},
                {id: 6, message: "post6", likes: 24, dislikes: 58},
            ],
            newPostText: "new_text"
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _rerenderTree() {
        console.log('store._renderTree: state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderTree = observer;
    },

    /*post*/
    // _addNewPost() {
    //     console.log(`myRedux.js>_addNewPost`);
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likes: 0,
    //         dislikes: 0
    //     }
    //     // debugger
    //     this._state.profilePage.postsArr.push(newPost)
    //     this._state.profilePage.newPostText = ""
    //     this._rerenderTree(this._state)
    //     // debugger
    // },
    // _updateNewPostText(newText) {
    //     console.log(`myRedux.js>_updateNewPostText(${newText})`);
    //     this._state.profilePage.newPostText = newText
    //     this._rerenderTree(this._state)
    //     // debugger
    // },
    //
    // /*message*/
    // _addNewMessage() {
    //     console.log(`myRedux.js>_addNewMessage`);
    //     let newMessage = {
    //         id: 5,
    //         message: this._state.dialogsPage.newMessageText,
    //     }
    //     this._state.dialogsPage.messagesArr.push(newMessage)
    //     this._state.dialogsPage.newMessageText = ""
    //     this._rerenderTree(this._state)
    //     // debugger
    // },
    // _updateNewMessageText(newText) {
    //     console.log(`myRedux.js>_updateNewMessageText(${newText})`);
    //     this._state.dialogsPage.newMessageText = newText
    //     this._rerenderTree(this._state)
    //     // debugger
    // },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sidebar = dialogsReducer(this._state.sidebar, action)
        this._rerenderTree(this._state)
    }

}


window.store = store;

export default store;