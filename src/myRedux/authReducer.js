const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

export const setAuthUserData = (userId, email, login) => { //setUserDataAC
    return {type: SET_AUTH_USER_DATA, data: {userId,email,login}}
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA: {

            return {
                ...state,
                ...action.data, //внутри id email login isfetching которые перезатрут такие же из стэйта выше
                isAuth: true,
            }
        }

        default:
            return state
    }


}

export default authReducer;