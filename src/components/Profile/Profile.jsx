import s from './Profile.module.css'
// import MyPosts from "./MyPosts/MyPosts";
import React from "react";
import profileBG from "../../tropical-paradise-1000x600.jpg"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile() {
    return (
        <div className={`${s.content}`}>
            <div className={s.profileBgBlock}>
                <img  src={profileBG} className={s.profileBg} alt="bg"/>
            </div>
            {/*<div>*/}
            {/*    profile-text*/}
            {/*</div>*/}
            <MyPostsContainer //store = {props.store}
                     // postsArr={props.profilePage.postsArr}
                     // newPostText = {props.profilePage.newPostText}
                     // dispatch = {props.dispatch}
                     // addNewPost={props.addNewPost}
                     // updateNewPostText={props.updateNewPostText}
                     // newPostText={props.profilePage.newPostText}
            />
        </div>

    );
}

export default Profile;
