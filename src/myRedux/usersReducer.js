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

let photoSrc = 'https://sun9-42.userapi.com/impf/c850228/v850228517/72d31/uvNyv9kJ834.jpg?size=720x1080&quality=96&sign=c0156fc34a218778e7f295ae5f45eb9a&type=album'
const initialState = {
    usersArr: [
        {id: 1, name: "user1", followed: false, photo: photoSrc, country: 'Russia', city: 'Novosibirsk'},
        {id: 2, name: "user2", followed: true, photo: photoSrc, country: 'Russia', city: 'Novosibirsk'},
        {id: 3, name: "user3", followed: true, photo: photoSrc, country: 'Russia', city: 'Novosibirsk'},
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
                        return {...user, followed: true}
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
                        return {...user, followed: false}
                    return user
                }),
            }
        }
        case SET_USERS: {
            return {...state, usersArr: [...state.usersArr, ...action.usersArr]}
        }
        default:
            return state
    }


}

export default usersReducer;