import s from './Users.module.css'
import React from "react";
import noUserPhotoF from '../../assets/img/ava_f.jpg'
import noUserPhotoM from '../../assets/img/ava_m.png'
import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";
import axios from "axios";

let photoSrc = 'https://sun9-42.userapi.com/impf/c850228/v850228517/72d31/uvNyv9kJ834.jpg?size=720x1080&quality=96&sign=c0156fc34a218778e7f295ae5f45eb9a&type=album'

const baseUrl = "https://social-network.samuraijs.com/api/1.0"

/*====================================================================================================================*/

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
// debugger
    let pages = []
    // for (let i=1; i<=pagesCount; i++){
    //     pages.push(i)
    // }
    for (let i = 1; i <= pagesCount; i++) { //100 заменить на 10 при условии что pageSize>=10
        pages.push(i)
    }

    //
    let pagesDrawer = (page) => {
        if (page === 1)
            return <span onClick={(event) => {
                props.onPageChanged(page)
            }}>{page} </span>

        if (page <= props.currentPage+9
            && page >= props.currentPage-9) {
                return (<>
                    <span className={props.currentPage === page && s.selectPage}
                             onClick={(event) => {
                                 props.onPageChanged(page)
                             }}>{page} </span>
                </>
                )
        }
        if (page === pagesCount)
            return <span onClick={(event) => {
                props.onPageChanged(page)
            }}>{page} </span>
        if (page === props.currentPage-10
         || page === props.currentPage+10)
            return <span> ... </span>


    }


    // debugger

    return (
        <div>
            <div>
                {/*{pages.map(page =>*/}
                {/*    // {console.log("page=",page)}*/}
                {/*    <span className={props.currentPage === page && s.selectPage}*/}
                {/*        // onClick={() => { this.props.setCurrentPage(page) }}>{page}</span>*/}
                {/*          onClick={(event) => {*/}
                {/*              props.onPageChanged(page)*/}
                {/*          }}>{page} </span>*/}
                {/*)}*/}
                {pages.map(page => pagesDrawer(page) )}


                {/*<span>ы1</span>*/}
                {/*<span className={s.selectPage}>2</span>*/}
            </div>
            {
                props.usersArr.map(user =>
                    <div key={user.id}>
                        <div className={`${s.users}, ${s.grid}`}>
                            {/*users-text*/}
                            <div className={s.gridElement}>
                                <NavLink to={`/profile/${user.id}`} >
                                    <img className={s.photo} src={setUserPhoto(user.photos.small, user.sex)}
                                         alt={"userphoto"}/>
                                </NavLink>

                                {user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                          //  debugger
                                        props.toggleFollowingInProgress(true, user.id)
                                        axios.delete(`${baseUrl}/follow/${user.id}`,{
                                            withCredentials:true,
                                            headers: {
                                                "API-KEY": "cfa4d2c6-ad13-4c98-8dd0-74740d75c4a1",
                                            },
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0){ //is Auth = true
                                                    props.unfollowF(user.id);
                                                }
                                                props.toggleFollowingInProgress(false, user.id)
                                            })
                                        console.log("click follow");
                                    }}>unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                        props.toggleFollowingInProgress(true, user.id)
                                        axios.post(`${baseUrl}/follow/${user.id}`,{},{
                                            withCredentials:true,
                                            headers: {
                                                "API-KEY": "cfa4d2c6-ad13-4c98-8dd0-74740d75c4a1",
                                            },
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0){ //is Auth = true
                                                    props.followF(user.id);
                                                }
                                                props.toggleFollowingInProgress(false, user.id)
                                            })

                                        console.log("click unfollow");
                                    }
                                    }>follow</button>
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
        </div>)
}

/*====================================================================================================================*/

export let setUserPhoto = (photo, sex) => {
    if (photo != null)
        return photo
    else {
        if (sex === "male") return noUserPhotoM
        else return noUserPhotoF
    }
}

export default Users;
