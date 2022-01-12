import s from './Profile.module.css'
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

    return (
        <div className={`${s.content}`}>
            <ProfileInfo profile={props.profile} />
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
