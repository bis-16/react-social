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
                            <img className={s.avatar} src={setUserPhoto(user.photo, user.sex)} />
                            <div>{user.name}</div>
                         </div>

                     }
                     </div>
                 )
                 }



                {/*<div className={s.friendItem}>*/}
                {/*    <div className={s.avatar}> </div>*/}
                {/*    <div>name1</div>*/}
                {/*</div>*/}
                {/*<div className={s.friendItem}>*/}
                {/*    <div className={s.avatar}> </div>*/}
                {/*    <div>name2</div>*/}
                {/*</div>*/}
                {/*<div className={s.friendItem}>*/}
                {/*    <div className={s.avatar}> </div>*/}
                {/*    <div>name3</div>*/}
                {/*</div>*/}


     </div>
);
}

export default FriendsBlock;
