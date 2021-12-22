import s from './Users.module.css'
import * as axios from "axios";
import React from "react";
import noUserPhotoF from '../../assets/img/ava_f.jpg'
import noUserPhotoM from '../../assets/img/ava_m.png'

class Users2 extends React.Component{
    constructor(props) {
        super(props); //если только наследование, то этот кусок можно не писать - это поведение по умолчанию)
    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsersF(response.data.items)
            })
    }
    render() {
        return (<div>
            {
                this.props.usersArr.map(user =>
                    <div key={user.id}>
                        <div className={`${s.users}, ${s.grid}`}>
                            {/*users-text*/}
                            <div className={s.gridElement}>
                                <img className={s.photo} src={user.photo != null ? user.photo : noUserPhotoM} alt={"userphoto"}/>
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
                                <div className={s.gridSubElement}>
                                    <div>{user.location.country}</div>
                                    <div>{user.location.city}</div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>);
    }
}
/*====================================================================================================================*/

let setUserPhoto = (photo, sex) => {
    if (photo != null)
        return photo
    else {
        if (sex == "male") return  noUserPhotoM
        else return noUserPhotoF
    }
}

function Users(props) {
    if (props.usersArr === 0){
        props.setUserF([

        ])
    }

    return (<div>
        {
            props.usersArr.map(user =>
            <div key={user.id}>
                <div className={`${s.users}, ${s.grid}`}>
                    {/*users-text*/}
                    <div className={s.gridElement}>
                        <img className={s.photo} src={setUserPhoto(user.photo, user.sex)} alt={"userphoto"}/>
                        {user.followed
                            ? <button onClick={ () => {props.unfollowF(user.id)} }>follow</button>
                            : <button onClick={ () => {props.followF(user.id);
                                console.log("click unfollow");}
                                }>unfollow</button>
                        }


                    </div>
                    <div className={s.gridElement}>
                        <div className={s.gridSubElement}>
                            <div>{user.name}</div>
                            <div>text</div>
                        </div>
                        <div className={s.gridSubElement}>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>);
}

export default Users;