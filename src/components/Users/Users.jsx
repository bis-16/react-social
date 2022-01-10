import s from './Users.module.css'
import React from "react";
import noUserPhotoF from '../../assets/img/ava_f.jpg'
import noUserPhotoM from '../../assets/img/ava_m.png'

let photoSrc = 'https://sun9-42.userapi.com/impf/c850228/v850228517/72d31/uvNyv9kJ834.jpg?size=720x1080&quality=96&sign=c0156fc34a218778e7f295ae5f45eb9a&type=album'

/*====================================================================================================================*/

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    // for (let i=1; i<=pagesCount; i++){
    //     pages.push(i)
    // }
    for (let i = 1; i <= 100; i++) { //100 заменить на 10 при условии что pageSize>=10
        pages.push(i)
    }

    //
    let pagesDrawer = (page) => {
        if (page <= props.currentPage+9
            && page >= props.currentPage-9) {
                return <span className={props.currentPage === page && s.selectPage}
                             onClick={(event) => {
                                 props.onPageChanged(page)
                             }}>{page} </span>
        }
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
                                <img className={s.photo} src={setUserPhoto(user.photos.small, user.sex)}
                                     alt={"userphoto"}/>
                                {user.followed
                                    ? <button onClick={() => {
                                        props.unfollowF(user.id)
                                        console.log("unffollow");
                                    }}>follow</button>
                                    : <button onClick={() => {
                                        props.followF(user.id);
                                        console.log("click unfollow");
                                    }
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
