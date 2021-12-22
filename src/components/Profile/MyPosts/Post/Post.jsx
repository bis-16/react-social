import s from './Post.module.css'
import logo from '../../../../logo.svg';
import React from "react";

function Post(props) {
    return (
        <div className={s.post}>

            <img className={s.avatar} src={logo} alt={"ava"}/>

            {props.message}
            <div className={s.counters}>
                <div>likes:    {props.likes}</div>
                <div>dislikes: {props.dislikes}</div>
                <button onClick={ () => {props.likePost()} } className={"like"}>+</button>
                <button onClick={ () => {props.dislikePost()} } className={"dislike"}>-</button>
            </div>
        </div> 
    );
}

export default Post;
