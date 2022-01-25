import React from "react";
import {connect} from "react-redux";
import {
    followUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC, toggleFollowingInProgressAC,
    unFollowUserAC
}
    from "../../myRedux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

const baseUrl = "https://social-network.samuraijs.com/api/1.0"

class UsersAPIComponent extends React.Component{
    constructor(props) {
        super(props); //если только наследование, то этот кусок можно не писать - это поведение по умолчанию)
        console.log("UsersAPIComponent - constructor")
    }
    componentDidMount() {
        axios.get(`${baseUrl}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true,
        })
            .then(response => {
                this.props.setUsersF(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`${baseUrl}/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials:true,
        })
            .then(response => {
                this.props.setUsersF(response.data.items)
            })
    }
    // getUsers = () => {
    //     if (this.props.usersArr.length === 0){
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(response => {
    //                 this.props.setUsersF(response.data.items)
    //             })
    //         // debugger
    //         // this.props.setUsersF([
    //         //     {id: 1, name: "Sergio", sex: "male",   followed: false, photo: photoSrc, location: {country: 'Russia', city: 'Novosibirsk'}},
    //         //     {id: 2, name: "Antonio", sex: "male",   followed: true,  photo: null,     location: {country: 'USA',    city: 'LA'}},
    //         //     {id: 3, name: "Rose", sex: "female", followed: true,  photo: null,     location: {country: 'Russia', city: 'Sochi'}},
    //         // ])
    //     }
    // }
    render() {
        //debugger
        return (
            // <Users totalUsersCount = {this.props.totalUsersCount}
            //        pageSize = {this.props.pageSize}
            //        currentPage = {this.props.currentPage}
            //        onPageChanged = {this.onPageChanged}
            //        usersArr = {this.props.usersArr}
            //        follow = {this.props.followF}
            //        unfollow = {this.props.unfollowF}
            // />
            <Users onPageChanged = {this.onPageChanged} {...this.props} />
        )}
}

//
// class UsersContainer2 extends React.Component {
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users&page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsersF(response.data.items)
//                 this.props.setTotalUsersCount(response.data.totalCount)
//             })
//     }
//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users&page=${pageNumber}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items)
//             })
//     }
//     render() {
//         return <Users totalUsersCount = {this.props.totalUsersCount}
//                       pagesSize = {this.props.pageSize}
//                       currentPage = {this.props.currentPage}
//                       onPageChanged = {this.props.onPageChanged}
//                       users = {this.props.users}
//                       follow = {this.props.followF}
//                       unfollow = {this.props.unfollowF}
//                />
//     }
//
// }

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        usersArr: state.usersPage.usersArr,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}
let mapDispatchToProps = (dispatch) => { // для передачи дочерней компоненте колбэков
    // debugger
    return {
        followF: (userId) => {
            dispatch(followUserAC(userId))
        },
        unfollowF: (userId) => {
            dispatch(unFollowUserAC(userId))
        },
        setUsersF: (users) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (pageNumber) => {
            //dispatch( {type: SET_CURRENT_PAGE,
            //           currentPage: pageNumber} )
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        isFetching: (isFetching) => {
            dispatch(setTotalUsersCountAC(isFetching))
        },
        toggleFollowingInProgress: (isFetching, userId) => {
            dispatch(toggleFollowingInProgressAC(isFetching, userId))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
//const UsersContainer = connect(mapStateToProps, {followUserAC,
//                                                 unFollowUserAC,
//                                                 setUserAC,
//                                                 setCurrentPageAC,
//                                                 setTotalUsersCountAC,
//                                                 isFetchingAC,
//                                                 toggleFollowingInProgressAC
//                                                 })(UsersAPIComponent);
/* ****************************** */

export default UsersContainer;