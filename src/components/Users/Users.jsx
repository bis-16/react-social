import s from './Users.module.css'
import React from "react";

function Users(props) {
    return (<div>
        {
            props.usersArr.map(user =>
            <div key={user.id}>
                <div className={`${s.users}, ${s.grid}`}>
                    {/*users-text*/}
                    <div className={s.gridElement}>
                        <img className={s.photo} src={user.photo}/>
                        {user.followed
                            ? <button onClick={ () => {props.  follow(user.id)} }>follow</button>
                            : <button onClick={ () => {props.unfollow(user.id);
                                console.log("click");} }>unfollow</button>
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