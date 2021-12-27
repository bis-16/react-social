 import React from "react";
import {connect} from "react-redux";
import {followUserActionCreator, setUserActionCreator, unFollowUserActionCreator} from "../../myRedux/usersReducer";
import Users from "./Users";
import axios from "axios";

class UsersContainer2 extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users&page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersF(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users&page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <Users totalUsersCount = {this.props.totalUsersCount}
                      pagesSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.props.onPageChanged}
                      users = {this.props.users}
                      follow = {this.props.followF}
                      unfollow = {this.props.unfollowF}
               />
    }

}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        usersArr: state.usersPage.usersArr,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber) => {

        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;