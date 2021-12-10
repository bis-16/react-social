import s from './FriendsBlock.module.css'
// import {NavLink} from "react-router-dom";
import React from "react";

function FriendsBlock() {

    return (
        <div className={`${s.friendsBlock}`}>
                <h2>Friends</h2>
                <div className={s.friendItem}>
                    <div className={s.avatar}> </div>
                    <div>name1</div>
                </div>
                <div className={s.friendItem}>
                    <div className={s.avatar}> </div>
                    <div>name2</div>
                </div>
                <div className={s.friendItem}>
                    <div className={s.avatar}> </div>
                    <div>name3</div>
                </div>


        </div>
    );
}

export default FriendsBlock;
