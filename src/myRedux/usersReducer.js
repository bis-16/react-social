import {usersAPI as userAPI} from "../api/api";

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export const followUser = (userId) => { return {type: FOLLOW_USER, userId: userId} }
export const unFollowUser = (userId) => { return {type: UNFOLLOW_USER, userId: userId} }
export const setUser = (users) => { return {type: SET_USERS, usersArr: users} }
export const setCurrentPage = (currentPage) => { return {type: SET_CURRENT_PAGE, currentPage: currentPage} }
export const setTotalUsersCount = (totalCount) => { return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount} }
export const toggleIsFetching = (isFetching) => { return {type: TOGGLE_IS_FETCHING, isFetching: isFetching} }
export const toggleFollowingInProgress = (isFetching, userId) => { return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId} }


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
                            ...user, //
                            followed: true
                            }
                    return user
                }),
            }
        }
        case UNFOLLOW_USER: {
            return  {
                ...state,                                           //let stateCopy = {...state}; return stateCopy
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

export const getUsersThunkCreator = (currentPage, pageSize) => { //санкакреатор - ф-я которая может что-то принимать и возвращает санку с замыканием на это что-то
   return (dispatch) => { // санка - функция делает асинхронную работу и которая внутри себя диспатчит другие обычные экшены
        //this.props.toggleIsFetching(true)
        dispatch(toggleIsFetching(true))

        //userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                //this.props.toggleIsFetching(false)
                //this.props.setUsersF(data.items)
                //this.props.setTotalUsersCount(data.totalCount)
                dispatch(toggleIsFetching(false))
                dispatch(setUser(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export default usersReducer;