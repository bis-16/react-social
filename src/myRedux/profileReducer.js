const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export let addNewPostActionCreator = () => {
    return {type: ADD_NEW_POST}
}
export let updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_POST: {

            //state === profilePage

            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
                dislikes: 0
            }
            state.postsArr.push(newPost)
            state.newPostText = ""
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            break;
        }
        default: return state
    }

    return state
}

export default profileReducer;