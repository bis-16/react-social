import React from "react";
import {connect} from "react-redux";
import {followUserActionCreator, setUserActionCreator, unFollowUserActionCreator} from "../../myRedux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        usersArr: state.usersPage.usersArr
    }
}
let mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        follow: (userId) => {
            dispatch(followUserActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowUserActionCreator(userId))
        },
        setUser: (users) => {
            dispatch(setUserActionCreator(users))
        }
    }
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default usersContainer;