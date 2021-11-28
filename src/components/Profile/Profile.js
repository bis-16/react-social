import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import React from "react";
import profileBG from "../../tropical-paradise-1000x600.jpg"

function Profile(props) {
    return (
        <div className={`${s.content}`}>
            <div className={s.profileBgBlock}>
                <img  src={profileBG} className={s.profileBg} alt="bg"/>
            </div>
            {/*<div>*/}
            {/*    profile-text*/}
            {/*</div>*/}
            <MyPosts postsArr={props.profilePage.postsArr}
                     newPostText = {props.profilePage.newPostText}
                     // addNewPost={props.addNewPost}
                     // updateNewPostText={props.updateNewPostText}
                     // newPostText={props.profilePage.newPostText}
                     dispatch = {props.dispatch}
            />
        </div>

    );
}

export default Profile;
