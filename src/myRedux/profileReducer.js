const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const LIKE_POST = 'LIKE-POST'
const DISLIKE_POST = 'DISLIKE-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export let addNewPostAC = () => {
    return {type: ADD_NEW_POST}
}
export let updateNewPostAC = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export let  likePostAC = () => {
    return {type: LIKE_POST}
}
export let  dislikePostAC = () => {
    return {type: DISLIKE_POST}
}
export let setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: profile}
}

const initialState = {
    postsArr: [
        {id: 1, message: "this is my first post", likes: 54, dislikes: 8},
        {id: 2, message: "post2", likes: 21, dislikes: 98},
        {id: 3, message: "post3", likes: 24, dislikes: 48},
        {id: 4, message: "post4", likes: 64, dislikes: 38},
        {id: 5, message: "post5", likes: 14, dislikes: 18},
        {id: 6, message: "post6", likes: 24, dislikes: 58},
    ],
    newPostText: "new_text",
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST: {
            //state === profilePage
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
                dislikes: 0
            }
            return  {
                ...state,
                postsArr: [...state.postsArr, newPost], // === stateCopy.postsArr = [...state.postsArr] + postsArr.push(newPost)
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText // === stateCopy.newPostText = action.newText
            }
        }
        case LIKE_POST: {
            return {

            }
        }
        case DISLIKE_POST: {
            return {

            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default: return state
    }

    // return state
}

export default profileReducer;