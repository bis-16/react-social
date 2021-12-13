import s from './Users.module.css'
import React from "react";
import {connect} from "react-redux";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {addNewPostActionCreator, updateNewPostActionCreator} from "../../myRedux/profileReducer";
import {followUserActionCreator, unFollowUserActionCreator} from "../../myRedux/usersReducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followUserActionCreator())
        },
        unfollow: (userId) => {
            dispatch(unFollowUserActionCreator())
        },
        setUser: (userId) => {
            dispatch(unFollowUserActionCreator())
        }
    }
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default Users;