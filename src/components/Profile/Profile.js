import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPost";
import React from "react";

function Profile(props) {
    return (
        <div className={`${s.content}`}>
            {/*<div>*/}
            {/*    /!*<img src='https://nsr.nso.ru/sites/nsr.nso.ru/wodby_files/files/gerb_1.jpg'>*!/*/}
            {/*</div>*/}
            <div>
                profile-text
            </div>
            <MyPosts postsArr={props.postsArr}/>
        </div>

    );
}

export default Profile;
