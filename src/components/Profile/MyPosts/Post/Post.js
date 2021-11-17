import s from './Post.module.css'
import logo from '../../../../logo.svg';
import React from "react";

function Post(props) {
    return (
        <div className={s.post}>

            <img src={logo} alt={"ava"}/>
            {props.message}
            <div>like = {props.likes}</div>
            <div>dislike = {props.dislikes}</div>
        </div>
    );
}

export default Post;
