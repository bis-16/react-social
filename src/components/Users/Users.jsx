import s from './Users.module.css'
import React from "react";

function Users(props) {

    // props.setUserF(    )


    return (<div>
        {
            props.usersArr.map(user =>
            <div key={user.id}>
                <div className={`${s.users}, ${s.grid}`}>
                    {/*users-text*/}
                    <div className={s.gridElement}>
                        <img className={s.photo} src={user.photo} alt={"userphoto"}/>
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
                            <div>{user.country}</div>
                            <div>{user.city}</div>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>);
}

export default Users;