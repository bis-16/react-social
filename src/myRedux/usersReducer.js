const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export const followUserAC = (userId) => { return {type: FOLLOW_USER, userId: userId} }
export const unFollowUserAC = (userId) => { return {type: UNFOLLOW_USER, userId: userId} }
export const setUserAC = (users) => { return {type: SET_USERS, usersArr: users} }
export const setCurrentPageAC = (currentPage) => { return {type: SET_CURRENT_PAGE, currentPage: currentPage} }
export const setTotalUsersCountAC = (totalCount) => { return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount} }
export const toggleIsFetchingAC = (isFetching) => { return {type: TOGGLE_IS_FETCHING, isFetching: isFetching} }
export const toggleFollowingInProgressAC = (isFetching, userId) => { return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId} }


const initialState = {
    usersArr: [],
    pageSize: 5,
    totalUsersCount: 0 ,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
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
                //usersArr: [...state.usersArr, ...action.usersArr]
                usersArr: action.usersArr
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter (id => id !== action.userId)
            }
        }

        default:
            return state
    }


}

export default usersReducer;