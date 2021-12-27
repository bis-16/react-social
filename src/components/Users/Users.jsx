import s from './Users.module.css'
import * as axios from "axios";
import React from "react";
import noUserPhotoF from '../../assets/img/ava_f.jpg'
import noUserPhotoM from '../../assets/img/ava_m.png'
let photoSrc = 'https://sun9-42.userapi.com/impf/c850228/v850228517/72d31/uvNyv9kJ834.jpg?size=720x1080&quality=96&sign=c0156fc34a218778e7f295ae5f45eb9a&type=album'

class Users extends React.Component{
    constructor(props) {
        super(props); //если только наследование, то этот кусок можно не писать - это поведение по умолчанию)
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersF(response.data.items)
            })
    }
    getUsers = () => {
        if (this.props.usersArr.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsersF(response.data.items)
                })
            // debugger
            // this.props.setUsersF([
            //     {id: 1, name: "Sergio", sex: "male",   followed: false, photo: photoSrc, location: {country: 'Russia', city: 'Novosibirsk'}},
            //     {id: 2, name: "Antonio", sex: "male",   followed: true,  photo: null,     location: {country: 'USA',    city: 'LA'}},
            //     {id: 3, name: "Rose", sex: "female", followed: true,  photo: null,     location: {country: 'Russia', city: 'Sochi'}},
            // ])
        }
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i=1; i<=pagesCount; i++){
            pages.push(i)
        }
        // debugger

        return (<div>
            <div>
                {pages.map(page =>
                    // {console.log("page=",page)}
                    <span className={this.props.currentPage === page && s.selectPage}
                    onClick={() => { this.props.currentPage(page) }}>{page}</span>
                )}

                {/*<span>ы1</span>*/}
                {/*<span className={s.selectPage}>2</span>*/}
            </div>
        {
            this.props.usersArr.map(user =>
            <div key={user.id}>
                <div className={`${s.users}, ${s.grid}`}>
                    {/*users-text*/}
                    <div className={s.gridElement}>
                        <img className={s.photo} src={setUserPhoto(user.photos.small, user.sex)} alt={"userphoto"}/>
                        {user.followed
                            ? <button onClick={ () => {this.props.unfollowF(user.id)} }>follow</button>
                            : <button onClick={ () => {this.props.followF(user.id);
                                console.log("click unfollow");}
                                }>unfollow</button>
                        }

                    </div>
                    <div className={s.gridElement}>
                        <div className={s.gridSubElement}>
                            <div>{user.name}</div>
                            <div>text</div>
                        </div>
                        {/*<div className={s.gridSubElement}>*/}
                            {/*<div>{"user.location.country"}</div>*/}
                            {/*<div>{"user.location.city"}</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>)
        }
        <div>
            {/*<button onClick={this.getUsers}>See more</button>*/}
        </div>
        </div>);
    }
}
/*====================================================================================================================*/

export let setUserPhoto = (photo, sex) => {
    if (photo != null)
        return photo
    else {
        if (sex === "male") return  noUserPhotoM
        else return noUserPhotoF
    }
}

// function Users(props) {
//
//     let getUsers = () => {
//         if (props.usersArr.length === 0){
//             // axios.get("https://social-network.samuraijs.com/api/1.0/users")
//             //     .then(response => {
//             //         props.setUsersF(response.data.items)
//             //     })
//             // debugger
//             props.setUsersF([
//                 {id: 1, name: "Sergio", sex: "male",   followed: false, photo: photoSrc, location: {country: 'Russia', city: 'Novosibirsk'}},
//                 {id: 2, name: "Antonio", sex: "male",   followed: true,  photo: null,     location: {country: 'USA',    city: 'LA'}},
//                 {id: 3, name: "Rose", sex: "female", followed: true,  photo: null,     location: {country: 'Russia', city: 'Sochi'}},
//             ])
//         }
//     }
//
//     return (<div>
//         {
//             props.usersArr.map(user =>
//             <div key={user.id}>
//                 <div className={`${s.users}, ${s.grid}`}>
//                     {/*users-text*/}
//                     <div className={s.gridElement}>
//                         <img className={s.photo} src={setUserPhoto(user.photo, user.sex)} alt={"userphoto"}/>
//                         {user.followed
//                             ? <button onClick={ () => {props.unfollowF(user.id)} }>follow</button>
//                             : <button onClick={ () => {props.followF(user.id);
//                                 console.log("click unfollow");}
//                                 }>unfollow</button>
//                         }
//
//                     </div>
//                     <div className={s.gridElement}>
//                         <div className={s.gridSubElement}>
//                             <div>{user.name}</div>
//                             <div>text</div>
//                         </div>
//                         <div className={s.gridSubElement}>
//                             <div>{"user.location.country"}</div>
//                             <div>{"user.location.city"}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>)
//         }
//         <div>
//             <button onClick={getUsers}>See more</button>
//         </div>
//     </div>);
// }

export default Users;