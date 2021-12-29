import * as axios from "axios";
import React from "react";
import Users from "./Users";


class UsersAPIComponent extends React.Component{
    constructor(props) {
        super(props); //если только наследование, то этот кусок можно не писать - это поведение по умолчанию)
        console.log("UsersAPIComponent - constructor")
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersF(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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
        return (
            <Users totalUsersCount = {this.props.totalUsersCount}
                      pagesSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      usersArr = {this.props.usersArr}
                      follow = {this.props.followF}
                      unfollow = {this.props.unfollowF}
        />
        )}
}
/*====================================================================================================================*/
//
// export let setUserPhoto = (photo, sex) => {
//     if (photo != null)
//         return photo
//     else {
//         if (sex === "male") return  noUserPhotoM
//         else return noUserPhotoF
//     }
// }


export default UsersAPIComponent;