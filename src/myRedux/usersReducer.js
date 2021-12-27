const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const followUserActionCreator = (userId) => {
    return {type: FOLLOW_USER, userId: userId}
}
export const unFollowUserActionCreator = (userId) => {
    return {type: UNFOLLOW_USER, userId: userId}
}
export const setUserActionCreator = (users) => {
    return {type: SET_USERS, usersArr: users}
}
export const setCurrentPageActionCreator = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}


const initialState = {
    usersArr: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
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
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        default:
            return state
    }


}

export default usersReducer;