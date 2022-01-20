import s from './FriendsBlock.module.css'
// import {NavLink} from "react-router-dom";
import React from "react";
import {setUserPhoto} from "../../Users/Users";

function FriendsBlock(props) {


    return (<div className={`${s.friendsBlock}`}>
                <h2>Friends</h2>
                 {props.usersArr.map(user => <div className={s.friendItem}>
                     {user.followed &&
                         <div >
                             {/*setUserPhoto(user.photos.small, user.sex*/}
                            <img className={s.avatar} src={setUserPhoto(user.photos.small, user.sex)} />
                            <div>{user.name}</div>
                         </div>

                     }
                     </div>
                 )
                 }



     </div>
);
}

export default FriendsBlock;
