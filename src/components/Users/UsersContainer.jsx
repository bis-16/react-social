// import React from "react";
import {connect} from "react-redux";
import {followUserActionCreator, setUserActionCreator, unFollowUserActionCreator} from "../../myRedux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        usersArr: state.usersPage.usersArr
    }
}
let mapDispatchToProps = (dispatch) => { // для передачи дочерней компоненте колбэков
    // debugger
    return {
        followF: (userId) => {
            dispatch(followUserActionCreator(userId))
        },
        unfollowF: (userId) => {
            dispatch(unFollowUserActionCreator(userId))
        },
        setUsersF: (users) => {
            dispatch(setUserActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;