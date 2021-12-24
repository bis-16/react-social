const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS'

export const followUserActionCreator = (userId) => {
    return {type: FOLLOW_USER, userId: userId}
}
export const unFollowUserActionCreator = (userId) => {
    return {type: UNFOLLOW_USER, userId: userId}
}
export const setUserActionCreator = (users) => {
    return {type: SET_USERS, usersArr: users}
}


const initialState = {
    usersArr: [

    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER: {
            return  {
                ...state,
                //usersArr: [...state.usersArr],
                usersArr: state.usersArr.map(user => {
                    if (user.id === action.userId)
                        return {
                            ...user,
                            followed: true
                            }
                    return user
                }),
            }
        }
        case UNFOLLOW_USER: {
            return  {
                ...state,
                //usersArr: [...state.usersArr],
                usersArr: state.usersArr.map(user => {
                    if (user.id === action.userId)
                        return {
                            ...user,
                            followed: false
                        }
                    return user
                }),
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersArr: [...state.usersArr, ...action.usersArr]
            }
        }
        default:
            return state
    }


}

export default usersReducer;