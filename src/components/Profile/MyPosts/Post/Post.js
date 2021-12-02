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
            </div>
        </div> 
    );
}

export default Post;
