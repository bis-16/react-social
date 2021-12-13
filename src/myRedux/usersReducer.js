const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS'

export const followUserActionCreator = (userId) => {
    return {type: FOLLOW_USER, id: userId}
}
export const unFollowUserActionCreator = (userId) => {
    return {type: UNFOLLOW_USER, id: userId}
}
export const setUserActionCreator = (userId) => {
    return {type: SET_USERS, id: userId}
}

let photoSrc = 'https://sun9-42.userapi.com/impf/c850228/v850228517/72d31/uvNyv9kJ834.jpg?size=720x1080&quality=96&sign=c0156fc34a218778e7f295ae5f45eb9a&type=album'
const initialState = {
    usersArr: [
        {id: 1, name: "user1", followed: true, photo: photoSrc},
        {id: 2, name: "user2", followed: true, photo: photoSrc},
        {id: 3, name: "user3", followed: true, photo: photoSrc},
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER: {
            return  {
                ...state,
                usersArr: [...state.usersArr],
            }
        }
        case UNFOLLOW_USER: {
            return  {
                ...state,
                usersArr: [...state.usersArr],
            }
        }
        case SET_USERS: {

        }
        default:
            return state
    }


}

export default usersReducer;