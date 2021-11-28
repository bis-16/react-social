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
                {id: 3, dialog: "groupe1"},
                {id: 4, dialog: "user4"},
                {id: 5, dialog: "user5"},
                {id: 6, dialog: "user6"},
            ],
            messagesArr: [
                {id: 1, message: "hello"},
                {id: 2, message: "how are you?"},
                {id: 3, message: "=)"},
            ]
        }
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

    _addNewPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0,
            dislikes: 0
        }
        // debugger
        this._state.profilePage.postsArr.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderTree(this._state)
        // debugger
    },
    _updateNewPostText(newText) {

        console.log(`myState.js>updateNewPostText(${newText})`);
        this._state.profilePage.newPostText = newText
        this._rerenderTree(this._state)
        // debugger
    },

    dispatch(action){
        if (action.type=== 'ADD-NEW-POST'){
            this._addNewPost();
        }
        if (action.type=== 'UPDATE-NEW-POST-TEXT'){
            this._updateNewPostText(action.newText);
        }
    }
}

window.store = store;

export default store;